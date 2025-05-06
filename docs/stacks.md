<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: '/public/images/app_logs.png',
    name: 'Node',

  },
  {
    avatar: '/public/images/app_logs.png',
    name: 'Python',
  
  },
  {
    avatar: '/public/images/app_logs.png',
    name: 'Golang',
 
  },
  {
    avatar: '/public/images/app_logs.png',
    name: 'Bun',
  },
  {
    avatar: '/public/images/app_logs.png',
    name: 'Static Websites',
  },
]
</script>

# Supported Stacks

The following stacks are supported

<VPTeamMembers size="small" :members />
