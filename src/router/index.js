import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Corpora from '../views/Corpora.vue'
import Annotations from '../views/Annotations.vue'
import Annotation from '../views/Annotation.vue'
import Transcript from '../views/Transcript.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/corpora',
    name: 'corpora',
    component: Corpora
  },
  {
    path: '/annotations',
    name: 'annotations',
    component: Annotations
  },
  {
    path: '/annotation',
    name: 'annotation',
    component: Annotation
  },
  {
    path: '/transcript',
    name: 'transcript',
    component: Transcript
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router