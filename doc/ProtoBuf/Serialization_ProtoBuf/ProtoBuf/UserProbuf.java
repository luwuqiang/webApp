// Generated by the protocol buffer compiler.  DO NOT EDIT!
// source: User.proto

package Serialization_ProtoBuf.ProtoBuf;

public final class UserProbuf {
  private UserProbuf() {}
  public static void registerAllExtensions(
      com.google.protobuf.ExtensionRegistry registry) {
  }
  public interface UserOrBuilder extends
      // @@protoc_insertion_point(interface_extends:Serialization_ProtoBuf.ProtoBuf.User)
      com.google.protobuf.MessageOrBuilder {

    /**
     * <code>required int64 uid = 1;</code>
     */
    boolean hasUid();
    /**
     * <code>required int64 uid = 1;</code>
     */
    long getUid();

    /**
     * <code>optional string uname = 2;</code>
     */
    boolean hasUname();
    /**
     * <code>optional string uname = 2;</code>
     */
    java.lang.String getUname();
    /**
     * <code>optional string uname = 2;</code>
     */
    com.google.protobuf.ByteString
        getUnameBytes();

    /**
     * <code>optional string usex = 3;</code>
     */
    boolean hasUsex();
    /**
     * <code>optional string usex = 3;</code>
     */
    java.lang.String getUsex();
    /**
     * <code>optional string usex = 3;</code>
     */
    com.google.protobuf.ByteString
        getUsexBytes();

    /**
     * <code>optional string utel = 4;</code>
     */
    boolean hasUtel();
    /**
     * <code>optional string utel = 4;</code>
     */
    java.lang.String getUtel();
    /**
     * <code>optional string utel = 4;</code>
     */
    com.google.protobuf.ByteString
        getUtelBytes();
  }
  /**
   * Protobuf type {@code Serialization_ProtoBuf.ProtoBuf.User}
   */
  public static final class User extends
      com.google.protobuf.GeneratedMessage implements
      // @@protoc_insertion_point(message_implements:Serialization_ProtoBuf.ProtoBuf.User)
      UserOrBuilder {
    // Use User.newBuilder() to construct.
    private User(com.google.protobuf.GeneratedMessage.Builder<?> builder) {
      super(builder);
      this.unknownFields = builder.getUnknownFields();
    }
    private User(boolean noInit) { this.unknownFields = com.google.protobuf.UnknownFieldSet.getDefaultInstance(); }

    private static final User defaultInstance;
    public static User getDefaultInstance() {
      return defaultInstance;
    }

    public User getDefaultInstanceForType() {
      return defaultInstance;
    }

    private final com.google.protobuf.UnknownFieldSet unknownFields;
    @java.lang.Override
    public final com.google.protobuf.UnknownFieldSet
        getUnknownFields() {
      return this.unknownFields;
    }
    private User(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      initFields();
      int mutable_bitField0_ = 0;
      com.google.protobuf.UnknownFieldSet.Builder unknownFields =
          com.google.protobuf.UnknownFieldSet.newBuilder();
      try {
        boolean done = false;
        while (!done) {
          int tag = input.readTag();
          switch (tag) {
            case 0:
              done = true;
              break;
            default: {
              if (!parseUnknownField(input, unknownFields,
                                     extensionRegistry, tag)) {
                done = true;
              }
              break;
            }
            case 8: {
              bitField0_ |= 0x00000001;
              uid_ = input.readInt64();
              break;
            }
            case 18: {
              com.google.protobuf.ByteString bs = input.readBytes();
              bitField0_ |= 0x00000002;
              uname_ = bs;
              break;
            }
            case 26: {
              com.google.protobuf.ByteString bs = input.readBytes();
              bitField0_ |= 0x00000004;
              usex_ = bs;
              break;
            }
            case 34: {
              com.google.protobuf.ByteString bs = input.readBytes();
              bitField0_ |= 0x00000008;
              utel_ = bs;
              break;
            }
          }
        }
      } catch (com.google.protobuf.InvalidProtocolBufferException e) {
        throw e.setUnfinishedMessage(this);
      } catch (java.io.IOException e) {
        throw new com.google.protobuf.InvalidProtocolBufferException(
            e.getMessage()).setUnfinishedMessage(this);
      } finally {
        this.unknownFields = unknownFields.build();
        makeExtensionsImmutable();
      }
    }
    public static final com.google.protobuf.Descriptors.Descriptor
        getDescriptor() {
      return Serialization_ProtoBuf.ProtoBuf.UserProbuf.internal_static_Serialization_ProtoBuf_ProtoBuf_User_descriptor;
    }

    protected com.google.protobuf.GeneratedMessage.FieldAccessorTable
        internalGetFieldAccessorTable() {
      return Serialization_ProtoBuf.ProtoBuf.UserProbuf.internal_static_Serialization_ProtoBuf_ProtoBuf_User_fieldAccessorTable
          .ensureFieldAccessorsInitialized(
              Serialization_ProtoBuf.ProtoBuf.UserProbuf.User.class, Serialization_ProtoBuf.ProtoBuf.UserProbuf.User.Builder.class);
    }

    public static com.google.protobuf.Parser<User> PARSER =
        new com.google.protobuf.AbstractParser<User>() {
      public User parsePartialFrom(
          com.google.protobuf.CodedInputStream input,
          com.google.protobuf.ExtensionRegistryLite extensionRegistry)
          throws com.google.protobuf.InvalidProtocolBufferException {
        return new User(input, extensionRegistry);
      }
    };

    @java.lang.Override
    public com.google.protobuf.Parser<User> getParserForType() {
      return PARSER;
    }

    private int bitField0_;
    public static final int UID_FIELD_NUMBER = 1;
    private long uid_;
    /**
     * <code>required int64 uid = 1;</code>
     */
    public boolean hasUid() {
      return ((bitField0_ & 0x00000001) == 0x00000001);
    }
    /**
     * <code>required int64 uid = 1;</code>
     */
    public long getUid() {
      return uid_;
    }

    public static final int UNAME_FIELD_NUMBER = 2;
    private java.lang.Object uname_;
    /**
     * <code>optional string uname = 2;</code>
     */
    public boolean hasUname() {
      return ((bitField0_ & 0x00000002) == 0x00000002);
    }
    /**
     * <code>optional string uname = 2;</code>
     */
    public java.lang.String getUname() {
      java.lang.Object ref = uname_;
      if (ref instanceof java.lang.String) {
        return (java.lang.String) ref;
      } else {
        com.google.protobuf.ByteString bs = 
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        if (bs.isValidUtf8()) {
          uname_ = s;
        }
        return s;
      }
    }
    /**
     * <code>optional string uname = 2;</code>
     */
    public com.google.protobuf.ByteString
        getUnameBytes() {
      java.lang.Object ref = uname_;
      if (ref instanceof java.lang.String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        uname_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }

    public static final int USEX_FIELD_NUMBER = 3;
    private java.lang.Object usex_;
    /**
     * <code>optional string usex = 3;</code>
     */
    public boolean hasUsex() {
      return ((bitField0_ & 0x00000004) == 0x00000004);
    }
    /**
     * <code>optional string usex = 3;</code>
     */
    public java.lang.String getUsex() {
      java.lang.Object ref = usex_;
      if (ref instanceof java.lang.String) {
        return (java.lang.String) ref;
      } else {
        com.google.protobuf.ByteString bs = 
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        if (bs.isValidUtf8()) {
          usex_ = s;
        }
        return s;
      }
    }
    /**
     * <code>optional string usex = 3;</code>
     */
    public com.google.protobuf.ByteString
        getUsexBytes() {
      java.lang.Object ref = usex_;
      if (ref instanceof java.lang.String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        usex_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }

    public static final int UTEL_FIELD_NUMBER = 4;
    private java.lang.Object utel_;
    /**
     * <code>optional string utel = 4;</code>
     */
    public boolean hasUtel() {
      return ((bitField0_ & 0x00000008) == 0x00000008);
    }
    /**
     * <code>optional string utel = 4;</code>
     */
    public java.lang.String getUtel() {
      java.lang.Object ref = utel_;
      if (ref instanceof java.lang.String) {
        return (java.lang.String) ref;
      } else {
        com.google.protobuf.ByteString bs = 
            (com.google.protobuf.ByteString) ref;
        java.lang.String s = bs.toStringUtf8();
        if (bs.isValidUtf8()) {
          utel_ = s;
        }
        return s;
      }
    }
    /**
     * <code>optional string utel = 4;</code>
     */
    public com.google.protobuf.ByteString
        getUtelBytes() {
      java.lang.Object ref = utel_;
      if (ref instanceof java.lang.String) {
        com.google.protobuf.ByteString b = 
            com.google.protobuf.ByteString.copyFromUtf8(
                (java.lang.String) ref);
        utel_ = b;
        return b;
      } else {
        return (com.google.protobuf.ByteString) ref;
      }
    }

    private void initFields() {
      uid_ = 0L;
      uname_ = "";
      usex_ = "";
      utel_ = "";
    }
    private byte memoizedIsInitialized = -1;
    public final boolean isInitialized() {
      byte isInitialized = memoizedIsInitialized;
      if (isInitialized == 1) return true;
      if (isInitialized == 0) return false;

      if (!hasUid()) {
        memoizedIsInitialized = 0;
        return false;
      }
      memoizedIsInitialized = 1;
      return true;
    }

    public void writeTo(com.google.protobuf.CodedOutputStream output)
                        throws java.io.IOException {
      getSerializedSize();
      if (((bitField0_ & 0x00000001) == 0x00000001)) {
        output.writeInt64(1, uid_);
      }
      if (((bitField0_ & 0x00000002) == 0x00000002)) {
        output.writeBytes(2, getUnameBytes());
      }
      if (((bitField0_ & 0x00000004) == 0x00000004)) {
        output.writeBytes(3, getUsexBytes());
      }
      if (((bitField0_ & 0x00000008) == 0x00000008)) {
        output.writeBytes(4, getUtelBytes());
      }
      getUnknownFields().writeTo(output);
    }

    private int memoizedSerializedSize = -1;
    public int getSerializedSize() {
      int size = memoizedSerializedSize;
      if (size != -1) return size;

      size = 0;
      if (((bitField0_ & 0x00000001) == 0x00000001)) {
        size += com.google.protobuf.CodedOutputStream
          .computeInt64Size(1, uid_);
      }
      if (((bitField0_ & 0x00000002) == 0x00000002)) {
        size += com.google.protobuf.CodedOutputStream
          .computeBytesSize(2, getUnameBytes());
      }
      if (((bitField0_ & 0x00000004) == 0x00000004)) {
        size += com.google.protobuf.CodedOutputStream
          .computeBytesSize(3, getUsexBytes());
      }
      if (((bitField0_ & 0x00000008) == 0x00000008)) {
        size += com.google.protobuf.CodedOutputStream
          .computeBytesSize(4, getUtelBytes());
      }
      size += getUnknownFields().getSerializedSize();
      memoizedSerializedSize = size;
      return size;
    }

    private static final long serialVersionUID = 0L;
    @java.lang.Override
    protected java.lang.Object writeReplace()
        throws java.io.ObjectStreamException {
      return super.writeReplace();
    }

    public static Serialization_ProtoBuf.ProtoBuf.UserProbuf.User parseFrom(
        com.google.protobuf.ByteString data)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data);
    }
    public static Serialization_ProtoBuf.ProtoBuf.UserProbuf.User parseFrom(
        com.google.protobuf.ByteString data,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data, extensionRegistry);
    }
    public static Serialization_ProtoBuf.ProtoBuf.UserProbuf.User parseFrom(byte[] data)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data);
    }
    public static Serialization_ProtoBuf.ProtoBuf.UserProbuf.User parseFrom(
        byte[] data,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws com.google.protobuf.InvalidProtocolBufferException {
      return PARSER.parseFrom(data, extensionRegistry);
    }
    public static Serialization_ProtoBuf.ProtoBuf.UserProbuf.User parseFrom(java.io.InputStream input)
        throws java.io.IOException {
      return PARSER.parseFrom(input);
    }
    public static Serialization_ProtoBuf.ProtoBuf.UserProbuf.User parseFrom(
        java.io.InputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws java.io.IOException {
      return PARSER.parseFrom(input, extensionRegistry);
    }
    public static Serialization_ProtoBuf.ProtoBuf.UserProbuf.User parseDelimitedFrom(java.io.InputStream input)
        throws java.io.IOException {
      return PARSER.parseDelimitedFrom(input);
    }
    public static Serialization_ProtoBuf.ProtoBuf.UserProbuf.User parseDelimitedFrom(
        java.io.InputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws java.io.IOException {
      return PARSER.parseDelimitedFrom(input, extensionRegistry);
    }
    public static Serialization_ProtoBuf.ProtoBuf.UserProbuf.User parseFrom(
        com.google.protobuf.CodedInputStream input)
        throws java.io.IOException {
      return PARSER.parseFrom(input);
    }
    public static Serialization_ProtoBuf.ProtoBuf.UserProbuf.User parseFrom(
        com.google.protobuf.CodedInputStream input,
        com.google.protobuf.ExtensionRegistryLite extensionRegistry)
        throws java.io.IOException {
      return PARSER.parseFrom(input, extensionRegistry);
    }

    public static Builder newBuilder() { return Builder.create(); }
    public Builder newBuilderForType() { return newBuilder(); }
    public static Builder newBuilder(Serialization_ProtoBuf.ProtoBuf.UserProbuf.User prototype) {
      return newBuilder().mergeFrom(prototype);
    }
    public Builder toBuilder() { return newBuilder(this); }

    @java.lang.Override
    protected Builder newBuilderForType(
        com.google.protobuf.GeneratedMessage.BuilderParent parent) {
      Builder builder = new Builder(parent);
      return builder;
    }
    /**
     * Protobuf type {@code Serialization_ProtoBuf.ProtoBuf.User}
     */
    public static final class Builder extends
        com.google.protobuf.GeneratedMessage.Builder<Builder> implements
        // @@protoc_insertion_point(builder_implements:Serialization_ProtoBuf.ProtoBuf.User)
        Serialization_ProtoBuf.ProtoBuf.UserProbuf.UserOrBuilder {
      public static final com.google.protobuf.Descriptors.Descriptor
          getDescriptor() {
        return Serialization_ProtoBuf.ProtoBuf.UserProbuf.internal_static_Serialization_ProtoBuf_ProtoBuf_User_descriptor;
      }

      protected com.google.protobuf.GeneratedMessage.FieldAccessorTable
          internalGetFieldAccessorTable() {
        return Serialization_ProtoBuf.ProtoBuf.UserProbuf.internal_static_Serialization_ProtoBuf_ProtoBuf_User_fieldAccessorTable
            .ensureFieldAccessorsInitialized(
                Serialization_ProtoBuf.ProtoBuf.UserProbuf.User.class, Serialization_ProtoBuf.ProtoBuf.UserProbuf.User.Builder.class);
      }

      // Construct using Serialization_ProtoBuf.ProtoBuf.UserProbuf.User.newBuilder()
      private Builder() {
        maybeForceBuilderInitialization();
      }

      private Builder(
          com.google.protobuf.GeneratedMessage.BuilderParent parent) {
        super(parent);
        maybeForceBuilderInitialization();
      }
      private void maybeForceBuilderInitialization() {
        if (com.google.protobuf.GeneratedMessage.alwaysUseFieldBuilders) {
        }
      }
      private static Builder create() {
        return new Builder();
      }

      public Builder clear() {
        super.clear();
        uid_ = 0L;
        bitField0_ = (bitField0_ & ~0x00000001);
        uname_ = "";
        bitField0_ = (bitField0_ & ~0x00000002);
        usex_ = "";
        bitField0_ = (bitField0_ & ~0x00000004);
        utel_ = "";
        bitField0_ = (bitField0_ & ~0x00000008);
        return this;
      }

      public Builder clone() {
        return create().mergeFrom(buildPartial());
      }

      public com.google.protobuf.Descriptors.Descriptor
          getDescriptorForType() {
        return Serialization_ProtoBuf.ProtoBuf.UserProbuf.internal_static_Serialization_ProtoBuf_ProtoBuf_User_descriptor;
      }

      public Serialization_ProtoBuf.ProtoBuf.UserProbuf.User getDefaultInstanceForType() {
        return Serialization_ProtoBuf.ProtoBuf.UserProbuf.User.getDefaultInstance();
      }

      public Serialization_ProtoBuf.ProtoBuf.UserProbuf.User build() {
        Serialization_ProtoBuf.ProtoBuf.UserProbuf.User result = buildPartial();
        if (!result.isInitialized()) {
          throw newUninitializedMessageException(result);
        }
        return result;
      }

      public Serialization_ProtoBuf.ProtoBuf.UserProbuf.User buildPartial() {
        Serialization_ProtoBuf.ProtoBuf.UserProbuf.User result = new Serialization_ProtoBuf.ProtoBuf.UserProbuf.User(this);
        int from_bitField0_ = bitField0_;
        int to_bitField0_ = 0;
        if (((from_bitField0_ & 0x00000001) == 0x00000001)) {
          to_bitField0_ |= 0x00000001;
        }
        result.uid_ = uid_;
        if (((from_bitField0_ & 0x00000002) == 0x00000002)) {
          to_bitField0_ |= 0x00000002;
        }
        result.uname_ = uname_;
        if (((from_bitField0_ & 0x00000004) == 0x00000004)) {
          to_bitField0_ |= 0x00000004;
        }
        result.usex_ = usex_;
        if (((from_bitField0_ & 0x00000008) == 0x00000008)) {
          to_bitField0_ |= 0x00000008;
        }
        result.utel_ = utel_;
        result.bitField0_ = to_bitField0_;
        onBuilt();
        return result;
      }

      public Builder mergeFrom(com.google.protobuf.Message other) {
        if (other instanceof Serialization_ProtoBuf.ProtoBuf.UserProbuf.User) {
          return mergeFrom((Serialization_ProtoBuf.ProtoBuf.UserProbuf.User)other);
        } else {
          super.mergeFrom(other);
          return this;
        }
      }

      public Builder mergeFrom(Serialization_ProtoBuf.ProtoBuf.UserProbuf.User other) {
        if (other == Serialization_ProtoBuf.ProtoBuf.UserProbuf.User.getDefaultInstance()) return this;
        if (other.hasUid()) {
          setUid(other.getUid());
        }
        if (other.hasUname()) {
          bitField0_ |= 0x00000002;
          uname_ = other.uname_;
          onChanged();
        }
        if (other.hasUsex()) {
          bitField0_ |= 0x00000004;
          usex_ = other.usex_;
          onChanged();
        }
        if (other.hasUtel()) {
          bitField0_ |= 0x00000008;
          utel_ = other.utel_;
          onChanged();
        }
        this.mergeUnknownFields(other.getUnknownFields());
        return this;
      }

      public final boolean isInitialized() {
        if (!hasUid()) {
          
          return false;
        }
        return true;
      }

      public Builder mergeFrom(
          com.google.protobuf.CodedInputStream input,
          com.google.protobuf.ExtensionRegistryLite extensionRegistry)
          throws java.io.IOException {
        Serialization_ProtoBuf.ProtoBuf.UserProbuf.User parsedMessage = null;
        try {
          parsedMessage = PARSER.parsePartialFrom(input, extensionRegistry);
        } catch (com.google.protobuf.InvalidProtocolBufferException e) {
          parsedMessage = (Serialization_ProtoBuf.ProtoBuf.UserProbuf.User) e.getUnfinishedMessage();
          throw e;
        } finally {
          if (parsedMessage != null) {
            mergeFrom(parsedMessage);
          }
        }
        return this;
      }
      private int bitField0_;

      private long uid_ ;
      /**
       * <code>required int64 uid = 1;</code>
       */
      public boolean hasUid() {
        return ((bitField0_ & 0x00000001) == 0x00000001);
      }
      /**
       * <code>required int64 uid = 1;</code>
       */
      public long getUid() {
        return uid_;
      }
      /**
       * <code>required int64 uid = 1;</code>
       */
      public Builder setUid(long value) {
        bitField0_ |= 0x00000001;
        uid_ = value;
        onChanged();
        return this;
      }
      /**
       * <code>required int64 uid = 1;</code>
       */
      public Builder clearUid() {
        bitField0_ = (bitField0_ & ~0x00000001);
        uid_ = 0L;
        onChanged();
        return this;
      }

      private java.lang.Object uname_ = "";
      /**
       * <code>optional string uname = 2;</code>
       */
      public boolean hasUname() {
        return ((bitField0_ & 0x00000002) == 0x00000002);
      }
      /**
       * <code>optional string uname = 2;</code>
       */
      public java.lang.String getUname() {
        java.lang.Object ref = uname_;
        if (!(ref instanceof java.lang.String)) {
          com.google.protobuf.ByteString bs =
              (com.google.protobuf.ByteString) ref;
          java.lang.String s = bs.toStringUtf8();
          if (bs.isValidUtf8()) {
            uname_ = s;
          }
          return s;
        } else {
          return (java.lang.String) ref;
        }
      }
      /**
       * <code>optional string uname = 2;</code>
       */
      public com.google.protobuf.ByteString
          getUnameBytes() {
        java.lang.Object ref = uname_;
        if (ref instanceof String) {
          com.google.protobuf.ByteString b = 
              com.google.protobuf.ByteString.copyFromUtf8(
                  (java.lang.String) ref);
          uname_ = b;
          return b;
        } else {
          return (com.google.protobuf.ByteString) ref;
        }
      }
      /**
       * <code>optional string uname = 2;</code>
       */
      public Builder setUname(
          java.lang.String value) {
        if (value == null) {
    throw new NullPointerException();
  }
  bitField0_ |= 0x00000002;
        uname_ = value;
        onChanged();
        return this;
      }
      /**
       * <code>optional string uname = 2;</code>
       */
      public Builder clearUname() {
        bitField0_ = (bitField0_ & ~0x00000002);
        uname_ = getDefaultInstance().getUname();
        onChanged();
        return this;
      }
      /**
       * <code>optional string uname = 2;</code>
       */
      public Builder setUnameBytes(
          com.google.protobuf.ByteString value) {
        if (value == null) {
    throw new NullPointerException();
  }
  bitField0_ |= 0x00000002;
        uname_ = value;
        onChanged();
        return this;
      }

      private java.lang.Object usex_ = "";
      /**
       * <code>optional string usex = 3;</code>
       */
      public boolean hasUsex() {
        return ((bitField0_ & 0x00000004) == 0x00000004);
      }
      /**
       * <code>optional string usex = 3;</code>
       */
      public java.lang.String getUsex() {
        java.lang.Object ref = usex_;
        if (!(ref instanceof java.lang.String)) {
          com.google.protobuf.ByteString bs =
              (com.google.protobuf.ByteString) ref;
          java.lang.String s = bs.toStringUtf8();
          if (bs.isValidUtf8()) {
            usex_ = s;
          }
          return s;
        } else {
          return (java.lang.String) ref;
        }
      }
      /**
       * <code>optional string usex = 3;</code>
       */
      public com.google.protobuf.ByteString
          getUsexBytes() {
        java.lang.Object ref = usex_;
        if (ref instanceof String) {
          com.google.protobuf.ByteString b = 
              com.google.protobuf.ByteString.copyFromUtf8(
                  (java.lang.String) ref);
          usex_ = b;
          return b;
        } else {
          return (com.google.protobuf.ByteString) ref;
        }
      }
      /**
       * <code>optional string usex = 3;</code>
       */
      public Builder setUsex(
          java.lang.String value) {
        if (value == null) {
    throw new NullPointerException();
  }
  bitField0_ |= 0x00000004;
        usex_ = value;
        onChanged();
        return this;
      }
      /**
       * <code>optional string usex = 3;</code>
       */
      public Builder clearUsex() {
        bitField0_ = (bitField0_ & ~0x00000004);
        usex_ = getDefaultInstance().getUsex();
        onChanged();
        return this;
      }
      /**
       * <code>optional string usex = 3;</code>
       */
      public Builder setUsexBytes(
          com.google.protobuf.ByteString value) {
        if (value == null) {
    throw new NullPointerException();
  }
  bitField0_ |= 0x00000004;
        usex_ = value;
        onChanged();
        return this;
      }

      private java.lang.Object utel_ = "";
      /**
       * <code>optional string utel = 4;</code>
       */
      public boolean hasUtel() {
        return ((bitField0_ & 0x00000008) == 0x00000008);
      }
      /**
       * <code>optional string utel = 4;</code>
       */
      public java.lang.String getUtel() {
        java.lang.Object ref = utel_;
        if (!(ref instanceof java.lang.String)) {
          com.google.protobuf.ByteString bs =
              (com.google.protobuf.ByteString) ref;
          java.lang.String s = bs.toStringUtf8();
          if (bs.isValidUtf8()) {
            utel_ = s;
          }
          return s;
        } else {
          return (java.lang.String) ref;
        }
      }
      /**
       * <code>optional string utel = 4;</code>
       */
      public com.google.protobuf.ByteString
          getUtelBytes() {
        java.lang.Object ref = utel_;
        if (ref instanceof String) {
          com.google.protobuf.ByteString b = 
              com.google.protobuf.ByteString.copyFromUtf8(
                  (java.lang.String) ref);
          utel_ = b;
          return b;
        } else {
          return (com.google.protobuf.ByteString) ref;
        }
      }
      /**
       * <code>optional string utel = 4;</code>
       */
      public Builder setUtel(
          java.lang.String value) {
        if (value == null) {
    throw new NullPointerException();
  }
  bitField0_ |= 0x00000008;
        utel_ = value;
        onChanged();
        return this;
      }
      /**
       * <code>optional string utel = 4;</code>
       */
      public Builder clearUtel() {
        bitField0_ = (bitField0_ & ~0x00000008);
        utel_ = getDefaultInstance().getUtel();
        onChanged();
        return this;
      }
      /**
       * <code>optional string utel = 4;</code>
       */
      public Builder setUtelBytes(
          com.google.protobuf.ByteString value) {
        if (value == null) {
    throw new NullPointerException();
  }
  bitField0_ |= 0x00000008;
        utel_ = value;
        onChanged();
        return this;
      }

      // @@protoc_insertion_point(builder_scope:Serialization_ProtoBuf.ProtoBuf.User)
    }

    static {
      defaultInstance = new User(true);
      defaultInstance.initFields();
    }

    // @@protoc_insertion_point(class_scope:Serialization_ProtoBuf.ProtoBuf.User)
  }

  private static final com.google.protobuf.Descriptors.Descriptor
    internal_static_Serialization_ProtoBuf_ProtoBuf_User_descriptor;
  private static
    com.google.protobuf.GeneratedMessage.FieldAccessorTable
      internal_static_Serialization_ProtoBuf_ProtoBuf_User_fieldAccessorTable;

  public static com.google.protobuf.Descriptors.FileDescriptor
      getDescriptor() {
    return descriptor;
  }
  private static com.google.protobuf.Descriptors.FileDescriptor
      descriptor;
  static {
    java.lang.String[] descriptorData = {
      "\n\nUser.proto\022\037Serialization_ProtoBuf.Pro" +
      "toBuf\">\n\004User\022\013\n\003uid\030\001 \002(\003\022\r\n\005uname\030\002 \001(" +
      "\t\022\014\n\004usex\030\003 \001(\t\022\014\n\004utel\030\004 \001(\tB-\n\037Seriali" +
      "zation_ProtoBuf.ProtoBufB\nUserProbuf"
    };
    com.google.protobuf.Descriptors.FileDescriptor.InternalDescriptorAssigner assigner =
        new com.google.protobuf.Descriptors.FileDescriptor.    InternalDescriptorAssigner() {
          public com.google.protobuf.ExtensionRegistry assignDescriptors(
              com.google.protobuf.Descriptors.FileDescriptor root) {
            descriptor = root;
            return null;
          }
        };
    com.google.protobuf.Descriptors.FileDescriptor
      .internalBuildGeneratedFileFrom(descriptorData,
        new com.google.protobuf.Descriptors.FileDescriptor[] {
        }, assigner);
    internal_static_Serialization_ProtoBuf_ProtoBuf_User_descriptor =
      getDescriptor().getMessageTypes().get(0);
    internal_static_Serialization_ProtoBuf_ProtoBuf_User_fieldAccessorTable = new
      com.google.protobuf.GeneratedMessage.FieldAccessorTable(
        internal_static_Serialization_ProtoBuf_ProtoBuf_User_descriptor,
        new java.lang.String[] { "Uid", "Uname", "Usex", "Utel", });
  }

  // @@protoc_insertion_point(outer_class_scope)
}