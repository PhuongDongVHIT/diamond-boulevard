<script>
  import PropertyCard from '$lib/components/PropertyCard.svelte';
  import { fadeUp, staggerFadeUp } from '$lib/actions/gsap';
  
  const title = "Danh Sách Bất Động Sản Xa Xỉ | Diamond Boulevard";
  const desc = "Duyệt qua bộ sưu tập bất động sản xa xỉ độc quyền, nổi bật với những dinh thự cao cấp, căn hộ penthouse và siêu biệt thự trên toàn thế giới.";

  let properties = $state([
    {
      id: 'prop-1',
      title: 'Skyline Penthouse Suites',
      location: 'New York, NY',
      price: 8500000,
      beds: 4,
      baths: 5,
      sqft: 420,
      imageUrl: '/images/property_1.png',
      status: 'Đang Bán'
    },
    {
      id: 'prop-2',
      title: 'Oceanview Mediterranean Villa',
      location: 'Malibu, CA',
      price: 15900000,
      beds: 6,
      baths: 8,
      sqft: 850,
      imageUrl: '/images/property_2.png',
      status: 'Vừa Lên Sàn'
    },
    {
      id: 'prop-3',
      title: 'Modern Glass Estate',
      location: 'Beverly Hills, CA',
      price: 24500000,
      beds: 7,
      baths: 9,
      sqft: 1200,
      imageUrl: '/images/hero.png',
      status: 'Độc Quyền'
    },
    {
      id: 'prop-4',
      title: 'Tuscan Countryside Manor',
      location: 'Tuscany, Italy',
      price: 12500000,
      beds: 8,
      baths: 9,
      sqft: 980,
      imageUrl: '/images/property_2.png',
      status: 'Đang Bán'
    },
    {
      id: 'prop-5',
      title: 'Ultra-Modern Cliff House',
      location: 'Cape Town, SA',
      price: 9800000,
      beds: 5,
      baths: 6,
      sqft: 650,
      imageUrl: '/images/property_1.png',
      status: 'Đang Giao Dịch'
    },
    {
      id: 'prop-6',
      title: 'Private Island Retreat',
      location: 'Exumas, Bahamas',
      price: 35000000,
      beds: 12,
      baths: 14,
      sqft: 2200,
      imageUrl: '/images/hero.png',
      status: 'Độc Quyền'
    }
  ]);

  let filterType = $state('Tất Cả');
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={desc} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={desc} />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://diamondestates.example.com/properties" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={desc} />
  <link rel="canonical" href="https://diamondestates.example.com/properties" />
</svelte:head>

<div class="relative pt-40 pb-20 overflow-hidden bg-bg-secondary">
  <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--accent-light)_0%,transparent_60%)] pointer-events-none"></div>
  <div class="relative z-10 text-center max-w-7xl mx-auto px-6 md:px-8 gsap-reveal" use:fadeUp={{ y: 30, duration: 1 }}>
    <h1 class="text-4xl md:text-[4.5rem] font-extrabold tracking-tight mb-6">Bất Động Sản <span class="text-accent">Độc Quyền</span></h1>
    <p class="max-w-[600px] mx-auto text-[1.2rem] text-text-secondary">Khám phá danh mục các dinh thự xa xỉ phi thường được tuyển chọn cho sự hoàn hảo tuyệt đối.</p>
  </div>
</div>

<div class="max-w-7xl mx-auto px-6 md:px-8 flex flex-wrap justify-between items-center gap-6 mb-12 -mt-8 relative z-20">
  <div class="flex flex-nowrap md:flex-wrap gap-2 p-2 rounded-xl bg-bg-color backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.05)] overflow-x-auto w-full md:w-auto">
    <button class="bg-transparent border-none px-6 py-3 rounded-lg font-semibold whitespace-nowrap transition-all {filterType === 'Tất Cả' ? 'bg-accent text-white' : 'text-text-secondary hover:text-text-color'}" onclick={() => filterType = 'Tất Cả'}>Tất cả</button>
    <button class="bg-transparent border-none px-6 py-3 rounded-lg font-semibold whitespace-nowrap transition-all {filterType === 'Đang Bán' ? 'bg-accent text-white' : 'text-text-secondary hover:text-text-color'}" onclick={() => filterType = 'Đang Bán'}>Đang Bán</button>
    <button class="bg-transparent border-none px-6 py-3 rounded-lg font-semibold whitespace-nowrap transition-all {filterType === 'Độc Quyền' ? 'bg-accent text-white' : 'text-text-secondary hover:text-text-color'}" onclick={() => filterType = 'Độc Quyền'}>Độc Quyền</button>
    <button class="bg-transparent border-none px-6 py-3 rounded-lg font-semibold whitespace-nowrap transition-all {filterType === 'Vừa Lên Sàn' ? 'bg-accent text-white' : 'text-text-secondary hover:text-text-color'}" onclick={() => filterType = 'Vừa Lên Sàn'}>Vừa Lên Sàn</button>
  </div>
  <div class="text-text-secondary font-medium w-full md:w-auto text-center md:text-right">
    Hiển thị {properties.length} bất động sản đẳng cấp
  </div>
</div>

<section class="max-w-7xl mx-auto px-6 md:px-8 pb-24 min-h-[60vh]">
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10" use:staggerFadeUp={{ y: 30, stagger: 0.1 }}>
    {#each properties as property (property.id)}
      {#if filterType === 'Tất Cả' || property.status === filterType}
        <div class="gsap-reveal">
          <PropertyCard {property} />
        </div>
      {/if}
    {/each}
  </div>
</section>
