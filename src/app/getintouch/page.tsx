const page = () => {
  return (
    <section className="max-w-5xl mx-auto py-20 space-y-4">
      <div className="text-sm">Get in touch or shoot me an email directly on darnzykay@gmail.com</div>
      <form 
      className="grid grid-cols-1 space-y-8 w-3/5"
      // onSubmit={}
      >
        <input type='text'
        placeholder="Name"
        className="bg-[#080808] text-white px-2 rounded-sm py-3 outline-1 border border-gray-500"
        />
        <input type="email"
        placeholder="Email"
        className="bg-[#080808] px-2 text-white rounded-sm py-3 outline-1 border border-gray-500"

        />
        <input type='text'
        className="bg-[#080808] px-2 text-white rounded-sm py-3 h-20 outline-1 border border-gray-500"
        placeholder="Message"
        />
        <button className="bg-gray-300 w-48 py-2 rounded-sm hover:bg-gray-100 transition-all duration-200">Submit &rarr;</button>
      </form>
    </section>
  )
}

export default page