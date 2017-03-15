package com.bluedom.demo.modules.common.netty.probufclient;

import io.netty.channel.ChannelFuture;
import io.netty.channel.ChannelFutureListener;
import io.netty.channel.EventLoop;

import java.util.concurrent.TimeUnit;

/**
 * Created by Administrator on 2017/3/15.
 */
public class ConnectionListener implements ChannelFutureListener {
    private NettyClient client;

    public ConnectionListener(NettyClient client) {
        this.client = client;

    }

    @Override
    public void operationComplete(ChannelFuture channelFuture) throws Exception {

        if (!channelFuture.isSuccess()) {
            System.out.println("Reconnect");
            final EventLoop loop = channelFuture.channel().eventLoop();
            loop.schedule(new Runnable() {
                @Override
                public void run() {
                    // TODO: 2017/3/15
//                    client.createBootstrap(new Bootstrap(), loop);
                }
            }, 1L, TimeUnit.SECONDS);
        }
    }
}
