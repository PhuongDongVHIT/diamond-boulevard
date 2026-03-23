<script lang="ts">
  import Facebook from 'lucide-svelte/icons/facebook';
  import Phone from 'lucide-svelte/icons/phone';
  import MessageCircle from 'lucide-svelte/icons/message-circle';

  const socialLinks = [
    {
      id: 'facebook',
      icon: Facebook,
      color: '#1877f2',
      href: 'https://facebook.com'
    },
    {
      id: 'zalo',
      icon: MessageCircle,
      color: '#0068ff',
      href: 'https://zalo.me'
    },
    {
      id: 'phone',
      icon: Phone,
      color: '#16a34a',
      href: 'tel:0900000000'
    }
  ];
</script>

<div class="fixed top-1/2 -translate-y-1/2 z-[100] right-4 lg:right-8 flex flex-col gap-4 items-end">
  {#each socialLinks as link}
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      class="group w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-white backdrop-blur-xs shadow-inner flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-2xl"
      style={`color:${link.color}`}
    >
      <svelte:component this={link.icon} size={22} strokeWidth={2.2} />
    </a>
  {/each}
</div>