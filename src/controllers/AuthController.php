<?php
/**
 * Created by PhpStorm.
 * User: ivoglent
 * Date: 6/15/18
 * Time: 11:33 AM
 */

namespace ivoglent\yii2\filemanager\controllers;


use ivoglent\yii2\components\Integration;
use yii\db\ActiveRecord;
use yii\web\Controller;
use yii\web\Response;

class AuthController extends Controller
{
    /**
     * Login user via token from filemanager service
     * @param $token
     * @return mixed user information
     */
    public function actionLogin($token) {
        \Yii::$app->response->format = Response::FORMAT_JSON;
        $userId = \Yii::$app->cache->get($token);
        if (!empty($userId)) {
            /** @var ActiveRecord $userClass */
            $userClass = \Yii::$app->user->identityClass;
            $user = $userClass::findOne($userId);
            if (!empty($user)) {
                \Yii::$app->cache->set($token, $userId, Integration::MAX_TOKEN_AGE);
                return [
                    'code' => 200,
                    'message' => 'Success',
                    'data' => $user
                ];
            }
        }

        return [
            'code' => '403',
            'message' => 'Invalid auth key or user not found'
        ];
    }
}