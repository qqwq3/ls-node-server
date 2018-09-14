/**
 * msg define templete
 * **/

var msg_templete ={}

//CS出牌消息
msg_templete.CS_out_card =
JSON.stringify({
    card_type:0,
    cards_data:[],
});
//SC出牌消息
msg_templete.SC_out_card =
JSON.stringify({
    error_code:0,
    out_user:0,
    out_card_type:0,
    out_cards_data:[],
});
msg_templete.SC_game_state =
JSON.stringify({
    state:1,
});
//SC当前操作玩家
msg_templete.SC_turn =
JSON.stringify({
    turn:0,
    black_three:0,
    max_index:0,
    now_card_type:0,
    now_card_data:[],
});
//SC当前出牌信息push
msg_templete.SC_out_push =
JSON.stringify({
    card_type:0,
    card_data:[],
});
//SC房间信息
msg_templete.SC_room_info =
JSON.stringify({
    room_id:0,
});
//SC玩家信息
msg_templete.SC_user_info =
JSON.stringify({
    seat_index:0,
    user_id:0,
});
//SC游戏结束信息
msg_templete.SC_game_end =
JSON.stringify({
    end_seats_data:[],
    force:false,
});
//SC游戏结算信息
msg_templete.SC_game_over =
JSON.stringify({
    over_seats_data:[],
    off_banker:false,
});
//CS战绩回放
msg_templete.CS_rollback =
JSON.stringify({
    uuid:0,
    index:0,
});
//SC战绩回放
msg_templete.SC_rollback =
JSON.stringify({
    
});
//CS申请解散房间
msg_templete.CS_Dismiss =
JSON.stringify({

});

//SC申请解散房间
msg_templete.SC_Dismiss =
JSON.stringify({
    
});


//牛牛消息

//庄家开始游戏
//event = start_play
msg_templete.CS_StartPlay =
JSON.stringify({

});

msg_templete.SC_StartPlay =
JSON.stringify({
    start_user_id:0,
    start_index:0
});

//提前开始游戏选择
//event = start_play_choice
msg_templete.CS_StartPlay_Choice =
JSON.stringify({
    agree:0,
});

msg_templete.SC_StartPlay_Choice =
JSON.stringify({
    choice_index:0,
    user_id:0,
    user_index:0,
    agree_list:{},
})

//提前开始游戏结果
//event = start_play_end
msg_templete.SC_StartPlay_End =
JSON.stringify({
    success:0,
    seat_index:0,
});
//下注
//event = betting
msg_templete.CS_Betting =
JSON.stringify({
    coin:0
});

msg_templete.SC_Betting =
JSON.stringify({
    error_code:0,
    seat_index:0,
    coin:0,
    total_coin:0
});

//叫庄
//event= call_banker
msg_templete.CS_CallBanker =
JSON.stringify({
    call:0,
});

msg_templete.SC_CallBanker =
JSON.stringify({
    call:0,
    seat_index:0
})

//下庄
//event = off_banker
msg_templete.CS_OffBanker =
JSON.stringify({
    off_index:0,
});

msg_templete.SC_OffBanker =
JSON.stringify({
    off_index:0,
});

//下庄状态
//event  = off_banker_state
msg_templete.SC_OffBankerState =
JSON.stringify({
    off_index:0,
});

//广播公盘
//event = banker_base_status
msg_templete.SC_BankerBaseStatus=
JSON.stringify({
    chose_index:0,
    base_score:[],
});

//庄家选择公盘
//event = banker_base
msg_templete.CS_BankerBase =
JSON.stringify({
    base_score:0
});

msg_templete.SC_BankerBase =
JSON.stringify({
    banker_index:0,
    base_score:0,
})

//庄家状态
//event = banker_status
msg_templete.SC_BankerStatus =
JSON.stringify({
    base_score:0,
    banker_count:0,
    current_score:0,
    banker_total_score:0,
});

//玩家加入当前局
msg_templete.CS_Join =
JSON.stringify({});

msg_templete.SC_Join =
JSON.stringify({
    watch_index:0,
    join:false,
})

//event = chose
// stage=[
//     {
//         type:-1,
//         card_data:[]
//     },
//     {
//         type:-1,
//         card_data:[]
//     },
//     {
//         type:-1,
//         card_data:[]
//     }
// ]
msg_templete.CS_Chose =
JSON.stringify({
    out_type:-1,
    stage:[],
})

msg_templete.SC_Chose =
JSON.stringify({
    error_code:-1,
    seat_index:-1,
    out_type:-1,
})


//CS转让房主
//event='transfer'
msg_templete.CS_Transfer = 
JSON.stringify({
    target:0
});
msg_templete.SC_Transfer =
JSON.stringify({
    new_seat:[] //新座位顺序--数组为用户id数组.
});

//CS房主踢人
//event='kick'
msg_templete.CS_Kick = 
JSON.stringify({
    target:0
});
msg_templete.SC_Kick =
JSON.stringify({
    kicked:0,//被踢用户
    new_seat:[]//新座位顺序--数组为用户id数组.
});

exports.msg_templete = msg_templete;