<?php
/**
 * Created by PhpStorm.
 * User: ivoglent
 * Date: 6/15/18
 * Time: 11:36 AM
 */

namespace ivoglent\yii2\components;


use yii\web\BadRequestHttpException;

class Integration
{
    const MAX_TOKEN_AGE     = 1800;
    /**
     *
     * Register current user who will use filemanager system
     * @param integer $maxLife
     * @return string auth_token
     * @throws BadRequestHttpException
     */
    public static function registerFilemanagerUser($maxLife = self::MAX_TOKEN_AGE /* 30 min only */) {
        if (\Yii::$app->user->isGuest) {
            throw new BadRequestHttpException('No user logged in!');
        }
        $token = '';
        do {
            $token = \Yii::$app->security->generateRandomString();
        } while (\Yii::$app->cache->get($token) !== false);
        \Yii::$app->cache->set($token, \Yii::$app->user->getId(), $maxLife);
        return $token;
    }
}