<?php

namespace Xpressengine\MediaLibrary;

use Xpressengine\Config\ConfigEntity;

class MediaLibraryConfigHandler
{
    /** @var ConfigEntity $config */
    protected $config;

    public function __construct($config)
    {
        $this->config = $config;
    }

    public function setThumbnailTypes()
    {
        if ($this->config == null) {
            return;
        }

        $fileConfig = $this->config->get('file');
        $dimensions = [];
        if (isset($fileConfig['dimensions']) == true) {
            $dimensions = $fileConfig['dimensions'];
        }
        config(['xe.media.thumbnail.dimensions' => array_merge(config('xe.media.thumbnail.dimensions'), $dimensions)]);

        $mediaLibraryConfig = [
            'max_size' => '',
            'disallow_extensions' => ''
        ];
        if (isset($fileConfig['max_size']) == true) {
            $mediaLibraryConfig['max_size'] = $fileConfig['max_size'];
        }
        if (isset($fileConfig['disallow_extensions']) == true) {
            $mediaLibraryConfig['disallow_extensions'] = $fileConfig['disallow_extensions'];
        }
        config(['xe.media.mediaLibrary' => $mediaLibraryConfig]);
    }

    public function storeConfig($attribute)
    {
        if (isset($attribute['file']) ==  true) {
            $this->config->set('file', array_merge($this->config->get('file'), $this->getNewFileConfigFormat($attribute['file'])));
        }

        if (isset($attribute['container']) == true) {
            $this->config->set('container', array_merge($this->config->get('container'), $attribute['container']));
        }

        app('xe.config')->modify($this->config);
    }

    private function getNewFileConfigFormat($attributes)
    {
        $config = [];

        foreach ($attributes as $key => $value) {
            $keys = explode('_', $key);
            if ($keys[0] == 'dimensions' && count($keys) == 3) {
                $config['dimensions'][strtoupper($keys[1])][$keys[2]] = $value;
            } else {
                $config[$key] = $value;
            }
        }

        return $config;
    }
}
