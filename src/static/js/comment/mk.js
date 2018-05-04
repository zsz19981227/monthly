define(['jquery', 'hand', '../../../mock/script.js'], function($, hand, template) {
    function yk() {
        $.ajax({
            url: '../../../mock/data/data.json',
            success: function(data) {
                Rendering(data)
            }
        })

        function Rendering(data) {
            template('#xr1', {
                data: data
            }, '.section')
            $('section dl').click(function() {
                var src = $(this).children().eq(0).children().attr('src');
                var name = $(this).children().eq(1).children().eq(0).html();
                var price = $(this).children().eq(1).children().eq(1).children().html();
                console.log(src, name, price)
                $('.wrap').css("display", 'none');
                var shuju = `<div class="shuju">
                        <header class="shuju-header">
                            <i class="iconfont btn">&#xe653;</i>
                            <p>
                                <span class="col">商品</span>
                                <span>详情</span>
                            </p>
                            <i class="iconfont">&#xe648;</i>
                        </header>
                        <section class="shuju-section">
                            <dl>
                                <dt>
                                    <img src="${src}" alt="">
                                </dt>
                                <dd>
                                    <h3>${name}</h3>
                                    <p>￥<span>${price}</span></p>
                                </dd>
                            </dl>
                        </section>
                    </div>`
                $('body').append($(shuju));
                $('.shuju-header span').click(function() {
                    $(this).addClass('col').siblings().removeClass('col')
                })

                $('.btn').click(function() {
                    $('.shuju').remove();
                    $('.wrap').css("display", 'block');
                })
            })
        }
        $.ajax({
            url: '../../../mock/data/dataTab.json',
            success: function(dataq) {
                tab(dataq)
            }
        })

        function tab(dataq) {
 