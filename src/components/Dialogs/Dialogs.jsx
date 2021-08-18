import React from 'react';
import s from './Dialogs.module.css';


const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.userArea}>
                <div className={s.userName}>
                    Yana
                </div>
                <div className={s.userDialog}>
                    Vania
                </div>
                <div className={s.userDialog}>
                    Yarek
                </div>
                <div className={s.userDialog}>
                    Volodia
                </div>
            </div>
            <div className={s.dialogArea}>

            </div>
        </div>
    );
};


export default Dialogs;