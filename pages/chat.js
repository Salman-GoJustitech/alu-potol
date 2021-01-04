import React from 'react'
import messaage from './api/message'
import People from './api/chat_profile'

function Chat() {
    return (
        <div >
            <div className="message__header">
                <img className="message__chat__image" src="https://lh3.googleusercontent.com/ogw/ADGmqu-TCFGODxPLXnKP9N_dxpUGOcWuC8fGTDc-TrNhu94=s32-c-mo"/>
                <div>
                    <p className="message__chat__title">Cong Hsüeh</p>
                    <p className="message__chat__details">lipsum as it is sometimes known</p>
                </div>
            </div>
            <div className="message__chat__box">
                {messaage.map((data)=>
                    
                        data.type == "send" ? (
                            <div className="send__message">
                                <div className="send__message__box">
                                    <p className="send__message__text">{data.message}</p>
                                </div>
                            </div>
                        ):(
                            <div className="recive__message">
                                <div className="recive__message__box">
                                    <p className="recive__message__text">{data.message}</p>
                                </div>
                            </div>
                        )
                    
                )}
            </div>
            <div style={{display:"flex" ,marginTop:"10px"}}>
                <input placeholder="Send Message" className="message__chat__input"/>
                <img src="https://scontent.xx.fbcdn.net/v/t1.15752-9/cp0/132334141_429629261510810_4896324373458337013_n.png?_nc_cat=104&ccb=2&_nc_sid=58c789&_nc_ohc=BuhLKoZ4vE8AX_IRbHY&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&_nc_tp=30&oh=c4550e0a8a078e2821f3a7300f1d1120&oe=6009A22A"/>
            </div>
            
        </div>
    )
}


                

export default Chat
