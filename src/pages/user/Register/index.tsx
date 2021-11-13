
import React, { useState } from 'react';
import { message } from 'antd';
import ProForm, { ProFormText, ProFormCaptcha } from '@ant-design/pro-form';
import { getFakeCaptcha } from '@/services/ant-design-pro/login';
import { useIntl, Link, history, FormattedMessage, SelectLang, useModel } from 'umi';
import './index.less';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};
const Register: React.FC = () => {

  return (
    <div className="main-bg">
      <div className="main-left">
        <h3>用科技</h3>
        <p>让复杂的世界更简单</p>
      </div>

      <div className="main-right">

        <div style={{ marginBottom: "40px" }}>

          <div style={{ fontSize: "40px", fontWeight: "bolder" }}>欢迎注册</div>
          <span>已有帐号？</span>
          <a href="/user/login">登陆</a>

        </div>
        <ProForm<{
          name: string;
          company?: string;
          useMode?: string;
        }>

          // submitter={{
          //   searchConfig: {
          //     submitText: "注册",
          //     resetText: '重置',
          //   },
          // }}
          layout={'horizontal'}
          onFinish={async (values) => {
            console.log(values);
            message.success('提交成功');
          }}
        >
          <div>
            <ProFormText
              width="md"
              name="Faccount_number"
              label="昵称"
              tooltip="最长为 24 位"
              placeholder="请输入昵称"
              rules={[
                {
                  required: true,
                  message: "昵称必填"
                },
              ]}
            />
            <ProFormText
              width="md"
              name="Faccount_number"
              label="账号"
              tooltip="最长为 24 位"
              placeholder="请输入账号"
              rules={[
                {
                  required: true,
                  message: "账号必填"
                },
              ]}
            />
            <ProFormText
              width="md"
              name="Fphone"
              label="手机号"
              placeholder="用于登陆和找回密码"
              rules={[
                {
                  required: true,
                  message: "手机号必填"
                },
                {
                  pattern: /^1\d{10}$/,
                  message: "手机号格式错误！"
                },
              ]}
            />
            {/* <ProFormCaptcha
                  fieldProps={{
                    size: 'large',
             
                  }}
                  captchaProps={{
                    size: 'large',
                  }}
                  placeholder='请输入验证码'
                  captchaTextRender={(timing, count) => {
                    if (timing) {
                      return `${count} 获取验证码`;
                    }
                    return '获取验证码';
                  }}
                  name="captcha"
                  rules={[
                    {
                      required: true,
                      message: "请输入验证码！"
                    },
                  ]}
                  onGetCaptcha={async (phone) => {
                    const result = await getFakeCaptcha({
                      phone,
                    });
                    if (result === false) {
                      return;
                    }
                    message.success('获取验证码成功！验证码为：1234');
                  }}
                /> */}
            <ProFormText
              name={'Fpassword'}
              width="md"
              label="密码"
              tooltip="最长为 24 位"
              placeholder="请输入密码"
              rules={[
                {
                  required: true,
                  message: "密码必填"

                },
              ]}
            />
          </div>
        </ProForm>
      </div>
    </div>

  );
};

export default Register;
