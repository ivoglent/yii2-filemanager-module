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
<input type="hidden" id="choosen-file" />
<button type="button" data-url="<?=\yii\helpers\BaseUrl::base(true) . '/' . $moduleId . '/dialog?type=4'?>" id="open-file-manager" class="btn btn-primary">Add photo</button>
<div id="file-manager-iframe-container">
    <iframe style="width: 1px; height: 1px" id="file-manager-iframe" src="about:blank"></iframe>
</div>