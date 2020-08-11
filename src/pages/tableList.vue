<template>
  <div class="table-list">
    <div class="search-form page-content">
      <el-form :inline="true" :model="formInline">
        <el-form-item label="姓名">
          <el-input v-model="formInline.name" placeholder="请输入姓名"></el-input>
        </el-form-item>
        <el-form-item label="年龄">
          <el-input v-model="formInline.age" placeholder="请输入年龄"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="table-container page-content">
      <el-table
        ref="multipleTable"
        :data="tableList"
        tooltip-effect="dark"
        style="width: 100%"
        row-key="id"
        @selection-change="handleSelectionChange">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          v-for="item in columns"
          :label="item.title"
          :key="item.key"
          :prop="item.dataIndex"
          :width="item.width"
          :show-overflow-tooltip="item.showOverflowTooltip"
          >
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
export default {
  name: 'tableList',
  data() {
    return {
      formInline: {
        name: '',
        age: ''
      },
      selectRows: [],
      tableData: [
        {
          id: '1',
          name: 'John Brown',
          date: '2016-05-08',
          age: 32,
          address: 'New York No. 1 Lake Park',
        },
        {
          id: '2',
          name: 'Jim Green',
          date: '2016-05-08',
          age: 42,
          address: 'London No. 1 Lake Park',
        },
        {
          id: '3',
          name: 'Joe Black',
          age: 30,
          date: '2016-05-08',
          address: 'Sidney No. 1 Lake Park',
        },
        {
          id: '4',
          name: 'Disabled User',
          age: 99,
          date: '2016-05-08',
          address: 'Sidney No. 1 Lake Park',
        }
      ],
      tableList: [],
      columns: [
        {
          title: '日期',
          width: 120,
          key: 'date',
          dataIndex: 'date'
        },
        {
          title: '姓名',
          width: 120,
          key: 'name',
          dataIndex: 'name'
        },
        {
          title: '年龄',
          width: 120,
          key: 'age',
          dataIndex: 'age'
        },
        {
          title: '地址',
          key: 'address',
          dataIndex: 'address',
          showOverflowTooltip: true
        }
      ]
    }
  },
  mounted() {
    this.tableList = this.tableData
  },
  methods: {
    onSubmit() {
      this.tableList = this.tableData.filter((v) => {
        return v.name.indexOf(this.formInline.name) !== -1 && (!this.formInline.age || v.age * 1 === this.formInline.age * 1) 
      })
      this.$refs.multipleTable.clearSelection();
      this.selectRows = []
    },
    handleSelectionChange(val) {
      this.selectRows = val
    }
  }
}
</script>
<style lang="less" scoped>
.table-list{
  .search-form{
    margin-bottom: 20px;
  }
}
</style>