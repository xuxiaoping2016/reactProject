/*
 * @Author: xiaoping.xu
 * @Date: 2021-05-07 00:16:38
 * @LastEditors: xiaoping.xu
 * @LastEditTime: 2021-05-10 20:13:27
 * @Desc: 
 */
import  React from 'react'
import imgUrl from '@/assets/images/avatar.jpg'
import Icon from '@/components/Icon'
import styles from './style.less'
import utils from './utils'

const ResoucePage = () => {
    console.log(utils.format())
    return (
        <div>
            <div className={styles["bg_red"]}>局部样式</div>
            <div className="bg_gray">使用公共全局样式</div>
            <div className={styles['tip']}>样式组合</div>
            <div className={styles["dis_flex"]}>
                <div className={styles["flex1"]}>1</div>
                <div className={styles["flex1"]}>2</div>
                <div className={styles["flex1"]}>3</div>
                <div className={styles["flex1"]}>4</div>
            </div>

            <div>
                <h2>图片处理</h2>
                <div>
                    img标签引用本地图片
                    <img className={styles.img} src={imgUrl}/>
                </div>
                <div className={styles.imgBg}>本地图片设置背景</div>
            </div>

            <div>
            <Icon name='icon-quan1'/>
            <Icon name='icon-dingdan1'/>
            <Icon name='icon-mine'/>
            </div>
        </div>
    )
}


export default ResoucePage