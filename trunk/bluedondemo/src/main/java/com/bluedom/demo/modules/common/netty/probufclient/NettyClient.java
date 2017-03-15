package com.bluedom.demo.modules.common.netty.probufclient;

import io.netty.bootstrap.Bootstrap;
import io.netty.channel.Channel;
import io.netty.channel.ChannelFuture;
import io.netty.channel.ChannelInitializer;
import io.netty.channel.ChannelOption;
import io.netty.channel.EventLoopGroup;
import io.netty.channel.nio.NioEventLoopGroup;
import io.netty.channel.socket.nio.NioSocketChannel;

import java.io.Closeable;
import java.io.IOException;

/**
 * Created by liuwuqiang on 2017/3/15.
 */
public class NettyClient implements Closeable {

    // 配置服务端的NIO线程组
    private EventLoopGroup eventLoopGroup = null;
    // Bootstrap 类，是启动NIO服务器的辅助启动类
    private Bootstrap bootstrap = null;

    private String host = "127.0.0.1";
    private int port = 1234;

    private ChannelFuture channelFuture = null;

    private ChannelInitializer channelInitializer;

    public void init() {
        try {
            // 配置服务端的NIO线程组
            EventLoopGroup group = new NioEventLoopGroup();
            // Bootstrap 类，是启动NIO服务器的辅助启动类
            bootstrap = new Bootstrap();
            bootstrap.group(group).channel(NioSocketChannel.class)
                    .option(ChannelOption.TCP_NODELAY, true)
                    .handler(getChannelInitializer());

            // 发起异步连接操作
            channelFuture = bootstrap.connect(host, port).sync();
            channelFuture.addListener(new ConnectionListener(this));
            // 等待客服端链路关闭
//            channelFuture.channel().closeFuture().sync();

        } catch (Exception e) {
            e.printStackTrace();
        } finally {
//            eventLoopGroup.shutdownGracefully();
        }
    }

    public void reload() {

    }

    public Channel getChannel() {
        if (channelFuture == null) return null;
        return channelFuture.channel();
    }

    public ChannelInitializer getChannelInitializer() {
        return channelInitializer;
    }

    public void setChannelInitializer(ChannelInitializer channelInitializer) {
        this.channelInitializer = channelInitializer;
    }

    public void setHost(String host) {
        this.host = host;
    }

    public void setPort(int port) {
        this.port = port;
    }

    public void destroy(){
        this.close();
    }

    @Override
    public void close() {

        System.out.println("close netty ..  ");
        try {
//            this.getChannel().closeFuture().sync();
            if (eventLoopGroup != null && !eventLoopGroup.isShutdown()) {
                eventLoopGroup.shutdownGracefully();
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static void main(String[] args) throws IOException {
        NettyClient client = new NettyClient();
        client.setHost("127.0.0.1");
        client.setPort(8080);
        client.setChannelInitializer(new NettyChannelInitializer());
        client.init();
        System.out.println("-----");
        client.destroy();
    }
}
