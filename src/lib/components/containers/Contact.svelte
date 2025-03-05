<script>
  import MaterialSymbolsPerson from '~icons/material-symbols/person';
  import MaterialSymbolsMail from '~icons/material-symbols/mail';
</script>


<div class="flex justify-center items-center">
  <form action="?/contact" class="w-full min-h-full dark:bg-surface-700 bg-surface-200 p-8 m-4 rounded-lg pr-12">
    <h1 class="h1 font-bold ps-4 pb-4">Contact Us</h1>
    <hr class="opacity-25" />
    <p class="pt-4">Fullname</p>
    <div class="input-group input-group-divider grid-cols-[auto_1fr_auto] mb-4">
      <div class="input-group-shim"><MaterialSymbolsPerson /></div>
      <input type="text" placeholder="John Doe" required />
    </div>
    <p>Email</p>
    <div class="input-group input-group-divider grid-cols-[auto_1fr_auto] mb-4">
      <div class="input-group-shim"><MaterialSymbolsMail /></div>
      <input type="email" placeholder="john@example.com" required />
    </div>
    <p>Subject</p>
    <div class="input-group input-group-divider grid-cols-[auto_1fr_auto] mb-4">
      <div class="input-group-shim"><MaterialSymbolsMail /></div>
      <select class="select" required>
        <option value="other" disabled selected hidden>Choose Subject</option>
        <option value="request">Work Request</option>
        <option value="upload">Upload Request</option>
        <option value="support">Support Request</option>
        <option value="other">Other</option>
      </select>
    </div>
    <p>Your Message</p>
    <textarea class="textarea mb-4" rows="4" placeholder="..." required ></textarea>
    <div class="w-full text-end">
      <button type="submit" class="btn variant-filled-primary">Submit</button>
    </div>
  </form>
</div>