//index.js

Component({

    /**
     * 页面的初始数据
     */
    data: {

    },

    methods: {

        onLoad: function(){

        },
        pageChange:function(e){
            let index=e.detail.current;
            let title='';
            if(index==0){
                title='班小二私密成绩';
            }else if(index==1){
                title='学生成绩';
            }else if(index==2){
                title='班小二成绩管理私密发送';
            }
            wx.setNavigationBarTitle({
              title: title
            })
        }

    }
});
