function Footer(){
return (
  <div className="bg-black/60 text-white py-12 px-4">
  <div className="max-w-6xl mx-auto">
    {/* Contenu principal */}
    <div className="flex flex-col md:flex-row justify-between items-center">
      {/* Logo */}
      <div className="mb-6 md:mb-0">
        <h2 className="text-2xl font-bold">CIMAS</h2>
        <h2 className="text-xl font-bold">Contact Us</h2>
      </div>
    </div>
    <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
      <p>© {new Date().getFullYear()} Votre Société. Tous droits réservés.</p>
    </div>
  </div>
</div>
)
}
export default Footer