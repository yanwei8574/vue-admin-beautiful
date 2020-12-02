<template>
  <div class="form-container">
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
        <el-form
          ref="ruleForm"
          :model="ruleForm"
          :rules="rules"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="账号邮箱" prop="email">
            <el-input
              v-model="ruleForm.email"
              :maxlength="50"
              placeholder="请输入账号邮箱"
              @change="ruleForm.email = ruleForm.email.trim()"
            ></el-input>
          </el-form-item>
          <el-form-item label="账号昵称" prop="nickname">
            <el-input
              v-model="ruleForm.nickname"
              :maxlength="20"
              placeholder="中文、字母、数字、空格、下划线的组合，1-20位且不能为空"
              @change="ruleForm.nickname = ruleForm.nickname.trim()"
            ></el-input>
          </el-form-item>
          <el-form-item label="姓名" prop="name">
            <el-input
              v-model="ruleForm.name"
              :maxlength="20"
              placeholder="中文、字母、数字、空格、下划线的组合，1-20位且不能为空"
              @change="ruleForm.name = ruleForm.name.trim()"
            ></el-input>
          </el-form-item>
          <el-form-item label="电话" prop="telephone">
            <el-input
              v-model="ruleForm.telephone"
              :maxlength="11"
              placeholder="请输入手机号码"
            ></el-input>
          </el-form-item>
          <el-form-item label="活动区域" prop="region">
            <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="电量要求" prop="electricity">
            <el-input-number
              v-model="ruleForm.electricity"
              :min="20"
              :max="100"
              size="small"
            ></el-input-number>
            <span>%（请输入20-100的整数）</span>
          </el-form-item>
          <el-form-item label="比例" prop="grayScale">
            <el-input-number
              v-model="ruleForm.grayScale"
              :min="1"
              :max="100"
              size="small"
            ></el-input-number>
            <span>（请输入1-100的整数）</span>
          </el-form-item>
          <el-form-item label="即时配送" prop="delivery">
            <el-switch v-model="ruleForm.delivery"></el-switch>
          </el-form-item>
          <el-form-item label="活动性质" prop="type">
            <el-checkbox-group v-model="ruleForm.type">
              <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
              <el-checkbox label="地推活动" name="type"></el-checkbox>
              <el-checkbox label="线下主题活动" name="type"></el-checkbox>
              <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="特殊资源" prop="resource">
            <el-radio-group v-model="ruleForm.resource">
              <el-radio label="线上品牌商赞助"></el-radio>
              <el-radio label="线下场地免费"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="活动形式" prop="desc">
            <el-input v-model="ruleForm.desc" type="textarea"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">
              立即创建
            </el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import {
    checkEmail,
    NAME_REGEXP,
    checkPhone,
    POSITIVE_INTEGER,
    HUNDRED_NUMBER,
  } from '@/utils/pattern'
  export default {
    name: 'Form',
    data() {
      return {
        ruleForm: {
          email: '',
          name: '',
          nickname: '',
          telephone: '',
          region: '',
          electricity: '',
          grayScale: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
        },
        rules: {
          email: [
            { required: true, message: '不为空', trigger: 'blur' },
            {
              min: 1,
              max: 50,
              message: '请输入 1 到 50 个字符',
              trigger: 'blur',
            },
            {
              pattern: checkEmail,
              message: '请输入有效的账号邮箱',
              trigger: 'blur',
            },
          ],
          name: [
            {
              pattern: NAME_REGEXP,
              message: '中文、字母、数字、空格、下划线的组合',
              trigger: 'blur',
            },
            {
              min: 1,
              max: 20,
              message: '请输入 1 到 20 个字符',
              trigger: 'blur',
            },
          ],
          nickname: [
            {
              required: true,
              message: '不为空',
              trigger: 'blur',
            },
            {
              pattern: NAME_REGEXP,
              message: '中文、字母、数字、空格、下划线的组合',
              trigger: 'blur',
            },
            {
              min: 1,
              max: 20,
              message: '请输入 1 到 20 个字符',
              trigger: 'blur',
            },
          ],
          telephone: [
            {
              required: true,
              message: '不为空',
              trigger: 'blur',
            },
            {
              min: 1,
              max: 11,
              message: '请输入 1 到 11 个字符',
              trigger: 'blur',
            },
            {
              pattern: checkPhone,
              message: '请输入有效的手机号码',
              trigger: 'blur',
            },
          ],
          electricity: [
            {
              pattern: POSITIVE_INTEGER,
              message: '请输入20-100的整数',
              trigger: 'blur',
            },
          ],
          grayScale: [
            {
              pattern: HUNDRED_NUMBER,
              message: '请输入1-100的整数',
              trigger: 'blur',
            },
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' },
          ],
          type: [
            {
              type: 'array',
              required: true,
              message: '请至少选择一个活动性质',
              trigger: 'change',
            },
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' },
          ],
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' },
          ],
        },
      }
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!')
          } else {
            return false
          }
        })
      },
      resetForm(formName) {
        this.$refs[formName].resetFields()
      },
    },
  }
</script>
