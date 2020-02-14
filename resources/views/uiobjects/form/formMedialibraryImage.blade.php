<div class="xe-form-group">
    <section class="xeuio-medialibrary xeuio-medialibrary--image __xeuio-medialibrary-image" id="__xeuio-{{ $seq }}" data-uio-seq="{{ $seq }}">
        <button type="button" class="xeuio-ml__button xeuio-ml__add"><i class="xi-plus"></i> 추가</button>
        <ul class="xeuio-ml__preview"></ul>
    </section>
</div>

<script>
    $(function () {
        var $element = $('#__xeuio-{{ $seq }}')
        var options = {
            valueTarget: 'file_id',
            name: '{{ array_get($args, 'name', 'image[]') }}', // field name
            @if(array_get($args, 'files')) files: {!! json_encode(array_get($args, 'files', [])) !!}, @endif
            @if(array_get($args, 'field')) field: '{{ array_get($args, 'field') }}', @endif
        }
        $element.uioMedialibraryImage(options)
    })
</script>
