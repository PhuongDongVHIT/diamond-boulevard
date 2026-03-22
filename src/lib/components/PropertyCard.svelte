<script>
  let { property } = $props();
</script>

<article
  class=" rounded-[1.5rem] overflow-hidden transition-all duration-300 border border-border-color shadow-[0_4px_30px_rgba(0,0,0,0.05)] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] group"
>
  <div class="relative aspect-[4/3] overflow-hidden">
    <img
      src={property.imageUrl}
      alt="{property.title} in {property.location}"
      class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      loading="lazy"
    />
    <div class="absolute top-4 left-4 flex gap-2">
      <span
        class="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-accent text-white"
        >{property.status}</span
      >
    </div>
    <div
      class="absolute bottom-0 left-0 p-4 text-2xl font-extrabold text-white bg-gradient-to-t from-black/80 to-transparent w-full"
    >
      ${property.price.toLocaleString()}
    </div>
  </div>

  <div class="p-6">
    <h3
      class="text-xl font-bold mb-2 whitespace-nowrap overflow-hidden text-ellipsis text-text-color"
    >
      {property.title}
    </h3>
    <p class="flex items-center gap-2 text-[0.9rem] text-text-secondary mb-6">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        ><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle
          cx="12"
          cy="10"
          r="3"
        ></circle></svg
      >
      {property.location}
    </p>

    <div
      class="flex justify-between items-center pb-6 mb-6 border-b border-border-color"
    >
      <div class="flex flex-col items-center">
        <span class="font-extrabold text-[1.1rem] text-text-color"
          >{property.beds}</span
        >
        <span class="text-[0.8rem] text-text-secondary uppercase tracking-wider"
          >Phòng Ngủ</span
        >
      </div>
      <div class="w-px h-6 bg-border-color"></div>
      <div class="flex flex-col items-center">
        <span class="font-extrabold text-[1.1rem] text-text-color"
          >{property.baths}</span
        >
        <span class="text-[0.8rem] text-text-secondary uppercase tracking-wider"
          >Phòng Tắm</span
        >
      </div>
      <div class="w-px h-6 bg-border-color"></div>
      <div class="flex flex-col items-center">
        <span class="font-extrabold text-[1.1rem] text-text-color"
          >{property.sqft.toLocaleString()}</span
        >
        <span class="text-[0.8rem] text-text-secondary uppercase tracking-wider"
          >m²</span
        >
      </div>
    </div>

    <a
      href="/properties/{property.id}"
      class="w-full inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold transition-all bg-accent text-white shadow-[0_4px_14px_rgba(239,101,34,0.3)] hover:bg-accent-hover hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(239,101,34,0.4)]"
      >Xem Chi Tiết</a
    >
  </div>
</article>
