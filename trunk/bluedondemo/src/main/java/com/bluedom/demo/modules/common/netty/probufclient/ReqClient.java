package com.bluedom.demo.modules.common.netty.probufclient;


import com.bluedom.demo.modules.common.protobuf.PersonProbuf;
import com.bluedom.demo.modules.common.protobuf.UserProbuf;
import io.netty.bootstrap.Bootstrap;
import io.netty.channel.ChannelFuture;
import io.netty.channel.ChannelInitializer;
import io.netty.channel.ChannelOption;
import io.netty.channel.EventLoopGroup;
import io.netty.channel.nio.NioEventLoopGroup;
import io.netty.channel.socket.SocketChannel;
import io.netty.channel.socket.nio.NioSocketChannel;
import io.netty.handler.codec.protobuf.ProtobufDecoder;
import io.netty.handler.codec.protobuf.ProtobufEncoder;
import io.netty.handler.codec.protobuf.ProtobufVarint32FrameDecoder;
import io.netty.handler.codec.protobuf.ProtobufVarint32LengthFieldPrepender;

/**
 *
 */
public class ReqClient {

    ChannelFuture f = null;

    public void connect(String host, int port) throws Exception {
        // 配置服务端的NIO线程组
        EventLoopGroup group = new NioEventLoopGroup();

        try {
            // Bootstrap 类，是启动NIO服务器的辅助启动类
            Bootstrap b = new Bootstrap();
            b.group(group).channel(NioSocketChannel.class)
                    .option(ChannelOption.TCP_NODELAY, true)
                    .handler(new ChannelInitializer<SocketChannel>() {
                        @Override
                        public void initChannel(SocketChannel ch)
                                throws Exception {
                            //
                            ch.pipeline().addLast(new ProtobufVarint32FrameDecoder());

                            ch.pipeline().addLast(new ProtobufDecoder(PersonProbuf.Person.getDefaultInstance()));
                            ch.pipeline().addLast(new ProtobufVarint32LengthFieldPrepender());
                            ch.pipeline().addLast(new ProtobufEncoder());
                            ch.pipeline().addLast(new ReqClientHandler());
                        }
                    });

            // 发起异步连接操作
            f = b.connect(host, port).sync();

            f.channel().writeAndFlush(PReq(100));
            f.channel().writeAndFlush(PReq2(120));

            // 等待客服端链路关闭
            f.channel().closeFuture().sync();


        } finally {
            group.shutdownGracefully();
        }
    }

    private static PersonProbuf.Person PReq(int id) {
        PersonProbuf.Person.Builder builder = PersonProbuf.Person.newBuilder();
        builder.setId(id);
        builder.setName("orange");
        builder.setSex("man");
        builder.setTel("999");

        return builder.build();
    }

    private static PersonProbuf.Person PReq2(int id) {
        PersonProbuf.Person.Builder builder = PersonProbuf.Person.newBuilder();
        builder.setId(id);
        builder.setName("orange22");
        builder.setSex("man");
        builder.setTel("999");

        return builder.build();
    }

    public static void main(String[] args) throws Exception {
        int port = 8080;
        if (args != null && args.length > 0) {
            try {
                port = Integer.valueOf(args[0]);
            } catch (NumberFormatException ex) {
            }
        }
        new ReqClient().connect("127.0.0.1", port);
        System.out.println("---nedddddd");
    }
}
