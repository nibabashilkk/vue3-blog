<!-- <template>
    <div>
      <h1 ref="mainHeading">{{ articleTitle }}</h1>
      <div ref="tableOfContents">
        <ul>
          <li v-for="(heading, index) in headings" :key="index" :class="{ active: isActive(heading.id) }">
            <a :href="`#${heading.id}`">{{ heading.text }}</a>
          </li>
        </ul>
      </div>
      <div v-html="articleContent"></div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, onMounted, ref } from 'vue'
  
  interface Heading {
    id: string
    text: string
    level: number
  }
  
  export default defineComponent({
    name: 'Article',
    props: {
      title: {
        type: String,
        required: true
      },
      content: {
        type: String,
        required: true
      }
    },
    setup(props) {
      const articleTitle = ref(props.title)
      const articleContent = ref(props.content)
      const headings = ref<Heading[]>([])
  
      const findHeadings = () => {
        const mainHeading = document.querySelector('h1')
        const tableOfContents = document.querySelector('#table-of-contents')
        if (mainHeading && tableOfContents) {
          const headingElems = [mainHeading.parentElement.querySelectorAll('h1, h2, h3')]
          const newHeadings = headingElems.map((heading, index) => {
            const id = `heading-${index}`
            heading.id = id
            return {
              id,
              text: heading.textContent!,
              level: parseInt(heading.tagName.replace(/[^\d]/g, ''))
            }
          })
          headings.value = newHeadings
        }
      }
  
      const isActive = (id: string) => {
        const headerEl = document.getElementById(id)
        if (headerEl) {
          const rect = headerEl.getBoundingClientRect()
          const top = rect.top
          return top > 0 && top <= window.innerHeight * 0.5
        }
        return false
      }
  
      onMounted(() => {
        findHeadings()
        window.addEventListener('scroll', findHeadings)
      })
  
      return {
        articleTitle,
        articleContent,
        headings,
        isActive
      }
    }
  })
  </script> -->