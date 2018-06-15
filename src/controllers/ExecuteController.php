<?php
/**
 * Created by PhpStorm.
 * User: ivoglent
 * Date: 6/15/18
 * Time: 2:57 PM
 */

namespace ivoglent\yii2\filemanager\controllers;


use yii\helpers\BaseUrl;
use yii\web\Controller;

class ExecuteController extends Controller
{
    public function actionIndex() {
        $viewFile = dirname(__DIR__) . '/libs/filemanager/execute.php';
        $user = \Yii::$app->user->identity;
        $assetUrl = \Yii::$app->controller->module->assetUrl;
        return $this->renderFile($viewFile, [
            'user' => $user,
            'assetUrl' => $assetUrl,
            'fileManagerConfigs' => [
                'baseUrl' => BaseUrl::base(true) . '/' . \Yii::$app->controller->module->id,
                'tokenName' => \Yii::$app->request->csrfParam
            ]
        ]);
    }
}