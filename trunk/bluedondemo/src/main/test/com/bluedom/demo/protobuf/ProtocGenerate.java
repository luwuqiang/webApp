package com.bluedom.demo.protobuf;

import java.io.IOException;

/**
 * Created by Administrator on 2017/3/14.
 */
public class ProtocGenerate {


    private static String protoCmd = "D:\\pro_github\\webApp\\trunk\\bluedondemo\\src\\main\\test\\com\\bluedom\\demo\\protobuf\\protoc.exe ";

    /**
     * protoc.exe -I=proto的输入目录 --java_out=java类输出目录 proto的输入目录包括包括proto文件
     * D:\pro_github\webApp\doc\ProtoBuf>protoc.exe --proto_path=./ --java_out=./ ./demo/msg.proto
     *
     * @param agrs
     */

    public static void main(String[] agrs) {
        String protoFile = "person-entity.proto";//
        String strCmd ="-I=./proto --java_out=./src/main/java ./proto/" + protoFile;

        try {
            System.out.println(protoCmd + strCmd);
            Runtime.getRuntime().exec(protoCmd + strCmd);
        } catch (Exception e) {
            e.printStackTrace();
        }//通过执行cmd命令调用protoc.exe程序
    }
}
