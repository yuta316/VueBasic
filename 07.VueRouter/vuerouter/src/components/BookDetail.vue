<template>
  <div>
      <p>本の詳細</p>
      <p> タイトル: {{title}}</p>
      <p> 本の内容: {{content}}</p>
      {{books[bookIndex].title}}
  </div>
</template>

<script>
export default {
    //propsの受け皿
    props: {
        id: Number,
        title: String,
        content: String,
    },
    data(){
        return{
            //リロードされた時のためにDetail側でも配列を持っておく必要がある
            bookIndex: this.$route.params.id-1,
            books: [
                {id:1, title:'タイトル1', content:'内容1'},
                {id:2, title:'タイトル2', content:'内容2'},
                {id:3, title:'タイトル3', content:'内容3'}
            ]
        }
    },
    created(){
        //配列より大きいindexにアクセスした際の挙動
        if(this.$route.params.id > this.books.length){
            //本一覧画面にリダイレクト
            this.$router.push('/book')
        }
    }
}
</script>

<style>

</style>