package com.bluedom.demo.modules.common.netty.probufclient;


import com.bluedom.demo.modules.common.protobuf.PersonProbuf;
import io.netty.channel.ChannelHandlerAdapter;
import io.netty.channel.ChannelHandlerContext;
import io.netty.channel.SimpleChannelInboundHandler;

/**
 *
 */
public class ReqClientHandler extends SimpleChannelInboundHandler<Object> {
    public ReqClientHandler() {
    }

    @Override
    protected void channelRead0(ChannelHandlerContext ctx, Object msg) throws Exception {
        System.out.println("receive server response:[" + msg + "]");
    }

    @Override
    public void channelActive(ChannelHandlerContext ctx) {
//        for (int i = 0; i < 2; i++) {
//            ctx.write(PReq(i));
//        }
//        ctx.flush();
        System.out.println("--> channelActive");
    }
//
//    private PersonProbuf.Person PReq(int id) {
//        PersonProbuf.Person.Builder builder = PersonProbuf.Person.newBuilder();
//        builder.setId(id);
//        builder.setName("orange");
//        builder.setSex("man");
//        builder.setTel("999");
//
//        return builder.build();
//    }

    @Override
    public void channelRead(ChannelHandlerContext ctx, Object msg) throws Exception {
        System.out.println("receive server response:[" + msg + "]");
    }

    @Override
    public void channelReadComplete(ChannelHandlerContext ctx) throws Exception {
        ctx.flush();
    }

    @Override
    public void exceptionCaught(ChannelHandlerContext ctx, Throwable cause) {
        cause.printStackTrace();
        ctx.close();
    }
}
