<template lang="pug">
b-container#adminmembers
  p.adminTitle 會員管理
  b-table#adminmembers-table.text-center(
    striped
    hover
    :items="pageBox"
    :fields="fields"
    ref="membersTable"
  )
    template(#cell(role)="data")
      font-awesome-icon(:icon='["fas", "check"]' v-if='data.item.role === 1')
    template(#cell(action)="data")
      b-btn.btn-edit(@click="editUser(data.index)") 編輯
  .overflow-auto.d-flex.justify-content-center
    b-pagination.mb-5(
      v-model="currentPage"
      :total-rows="totalRows"
      :per-page="perPage"
      first-number
      last-number
    )
  b-modal#modal-members(
    title="會員編輯"
    centered
    ok-variant="success"
    ok-title="送出"
    cancel-title="取消"
    @ok="submitModal"
  )
    b-form-group(
      label="帳戶"
      label-for="input-account"
    )
      b-form-input#input-account(
        v-model="form.account"
        type="text"
        disabled
      )
    b-form-group(
      label="信箱"
      label-for="input-email"
    )
      b-form-input#input-email(
        v-model="form.email"
        type="text"
        disabled
      )
    b-form-group(
      label="點數"
      label-for="input-points"
      description="點數限制為 0 以上"
    )
      b-form-input#input-points(
        v-model="form.points"
        type="number"
        required
        :state="state.points"
      )
    b-form-group(
      label="管理員"
      label-for="input-role"
    )
      b-form-radio(v-model="form.role" :value="0") 一般會員
      b-form-radio(v-model="form.role" :value="1") 管理員
</template>

<script>
export default {
  name: 'AdminMembers',
  data () {
    return {
      users: [],
      currentPage: 1,
      perPage: 10,
      fields: [
        {
          key: 'account',
          label: '帳戶',
          sortable: true
        },
        {
          key: 'email',
          label: '信箱',
          sortable: true
        },
        {
          key: 'points',
          label: '點數',
          sortable: true
        },
        {
          key: 'role',
          label: '管理員',
          sortable: true
        },
        {
          key: 'action',
          label: '操作'
        }
      ],
      form: {
        account: '',
        email: '',
        points: 0,
        role: 0,
        _id: ''
      }
    }
  },
  computed: {
    state () {
      return {
        points: this.form.points === 0 ? null : this.form.points >= 0
      }
    },
    pageBox () {
      const items = this.users
      return items.slice(
        (this.currentPage - 1) * this.perPage,
        this.currentPage * this.perPage
      )
    },
    totalRows () {
      return this.users.length
    }
  },
  methods: {
    editUser (index) {
      this.form = {
        account: this.pageBox[index].account,
        email: this.pageBox[index].email,
        points: this.pageBox[index].points,
        role: this.pageBox[index].role,
        _id: this.pageBox[index]._id,
        index
      }
      this.$bvModal.show('modal-members')
    },
    async submitModal () {
      try {
        const data = {
          points: this.form.points,
          role: this.form.role
        }
        await this.axios.patch('/users/' + this.form._id, data, {
          headers: {
            authorization: 'Bearer ' + this.$store.state.jwt.token
          }
        })
        this.pageBox[this.form.index] = {
          account: this.form.account,
          email: this.form.email,
          points: this.form.points,
          role: this.form.role,
          _id: this.form._id
        }
        this.$refs.membersTable.refresh()
        this.$bvModal.hide('modal-members')
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: '錯誤',
          text: error.response.data.message
        })
      }
    }
  },
  async mounted () {
    try {
      const { data } = await this.axios.get('/users/all', {
        headers: {
          authorization: 'Bearer ' + this.$store.state.jwt.token
        }
      })
      this.users = data.result
      return this.users
    } catch (error) {
      this.$swal({
        icon: 'error',
        title: '錯誤',
        text: '取得會員失敗'
      })
    }
  }
}
</script>
