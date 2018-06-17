<?php
/**
 * Created by PhpStorm.
 * User: ivoglent
 * Date: 6/15/18
 * Time: 4:51 PM
 * @var \yii\web\View $this
 */

$this->registerJsFile($assetUrl . '/js/scripts.js', [
    'depends' => [\yii\web\JqueryAsset::className()]
]);
$this->registerCssFile($assetUrl . '/css/choose-photo-input.css');
?>
<button type="button" data-url="<?=\yii\helpers\BaseUrl::base(true) . '/' . $moduleId . '/dialog?type=1&crossdomain=1&field_id=file'?>" id="open-file-manager" data-field_id="<?=$fieldId?>" data-file_base_url="<?=$baseFileUrl?>" data-callback_func="<?=$callbackFunc?>" class="btn btn-primary"><?=\Yii::t('app', 'Add photo')?></button>
<div id="file-manager-iframe-container">
    <a href="javascript:void(0)" id="close-filemanager"><i class="fa fa-close"></i> </a>
    <iframe style="width: 1px; height: 1px" id="file-manager-iframe" src="about:blank"></iframe>
</div>