<template>
  <div>
    本の一覧
    <ul>
        <li v-for="book in books" :key="book.id"
        @click="showBookDetail(book.id)">
            {{book.title}}
        </li>
    </ul>    
  </div>
</template>

<script>
export default {
    //nameはファイル名と同一
    name: 'BooKList',
    data(){
        return{
            bookIndex: -1,
            books:[
                {id:1, title:'タイトル1', content:'内容1'},
                {id:2, title:'タイトル2', content:'内容2'},
                {id:3, title:'タイトル3', content:'内容3'}
            ]
        }
    },
    methods:{
        showBookDetail(id){
            this.bookIndex = id-1
            console.log(this.bookIndex)

            //名前つきルータ
            this.$router.push({
                //nameはrouter/index.jsに対応
                name:'Book',
                params:{
                    id: this.books[this.bookIndex].id,
                    title: this.books[this.bookIndex].title,
                    content: this.books[this.bookIndex].content,
                }
            })
        }
    }
}
</script>

<style>

</style>