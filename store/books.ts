import {
  Module,
  VuexModule,
  Action,
  MutationAction,
  Mutation
} from 'vuex-module-decorators'
import { $axios } from '@/utils/nuxt-instance'

@Module({ name: 'books', stateFactory: true, namespaced: true })
export default class Books extends VuexModule {
  books = []
  singleBook = {}

  get $allBooks() {
    return this.books
  }

  get $singleBook() {
    return this.singleBook
  }

  @MutationAction({ mutate: ['books'], rawError: true })
  async fetchBooks() {
    const books = await $axios.$get('/books')
    return { books }
  }

  @MutationAction({ mutate: ['singleBook'], rawError: true })
  async fetchSingleBook(payload: string) {
    const singleBook = await $axios.$get(`/books/${payload}`)
    return { singleBook }
  }
}
