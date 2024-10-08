<div class="xe-form-group xe-dynamicField">
    <label class="xu-form-group__label __xe_df __xe_df_address __xe_df_address_{{$config->get('id')}}">
        {{xe_trans($config->get('label'))}}

        @if (!$config->get('use', false))
            @include('dynamicField.userActivateLink')
        @endif
    </label>

    @if ($config->get('skinDescription') !== '')<small>{{$config->get('skinDescription')}}</small>@endif
    <div class="xe-form-inline">
        <input type="text" name="{{$key['postcode']}}" placeholder="{{xe_trans('xe::postCode')}}" readonly="readonly" class="xe-form-control" value="{{$data['postcode']}}" data-valid-name="{{ xe_trans('xe::postCode') }}" @if (!$config->get('use', false)) disabled @endif>
        <input type="button" class="xe-btn xe-btn-default" onclick="execDaumPostcode('{{$config->get('id')}}')" value="{{xe_trans('xe::findPostCode')}}"  @if (!$config->get('use', false)) disabled @endif><br>
    </div>
    <div id="{{$config->get('id') . '-daumPostcodeWrap'}}" style="display:none;border:1px solid;width:500px;height:300px;margin:5px 0;position:relative">
        <img src="//i1.daumcdn.net/localimg/localimages/07/postcode/320/close.png" id="btnFoldWrap" style="cursor:pointer;position:absolute;right:0px;top:-1px;z-index:1" onclick="foldDaumPostcode('{{$config->get('id')}}')" alt="{{xe_trans('xe::fold')}}">
    </div>
    <div class="xe-form-inline">
        <input type="text" name="{{$key['address1']}}" class="xe-form-control" placeholder="{{xe_trans('xe::address')}}" readonly="readonly" value="{{$data['address1']}}" @if (!$config->get('use', false)) disabled @endif>
        <input type="text" name="{{$key['address2']}}" class="xe-form-control" placeholder="{{xe_trans('xe::detailedAddress')}}" value="{{$data['address2']}}" data-valid-name="{{ xe_trans('xe::detailedAddress') }}" @if (!$config->get('use', false)) disabled @endif>
    </div>
</div>
