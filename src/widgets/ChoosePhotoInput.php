<?php
/**
 * Created by PhpStorm.
 * User: ivoglent
 * Date: 6/15/18
 * Time: 12:17 AM
 */

namespace ivoglent\yii2\filemanager\widgets;


use ivoglent\yii2\filemanager\Module;
use yii\base\InvalidConfigException;
use yii\widgets\InputWidget;

class ChoosePhotoInput extends InputWidget
{
    public $fileModuleId;

    public function init()
    {
        parent::init(); // TODO: Change the autogenerated stub
        if (empty($this->fileModuleId)) {
            throw new InvalidConfigException('Please provide filemanager module id');
        }
    }

    public function run()
    {
        /** @var Module $module */
        $module = \Yii::$app->getModule($this->fileModuleId);
        return $this->render('choose-photo-input', [
            'assetUrl' => $module->assetUrl,
            'moduleId' => $this->fileModuleId
        ]);
    }
}