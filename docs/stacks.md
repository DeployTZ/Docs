<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: '/support/nodejs.png',
    name: 'Node',

  },
  {
    avatar: '/support/python.png',
    name: 'Python',
  
  },
  {
    avatar: '/support/go.svg',
    name: 'Golang',
 
  },
  {
    avatar: '/support/bun.png',
    name: 'Bun',
  },
  {
    avatar: '/support/html.png',
    name: 'Static Websites',
  },
]
</script>

# Supported Stacks

The following stacks are supported

<VPTeamMembers size="small" :members />
