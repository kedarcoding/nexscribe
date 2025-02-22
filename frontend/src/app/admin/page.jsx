import AdminLayout from "../components/Admin/AdminLayout"


export default function AdminPage() {
 
  return (
         <AdminLayout>
          <div className="text-blue-200 mx-2">
            <p>
              This is some dummy content for testing the layout. You can replace this with your actual content later.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia, nulla eu auctor tincidunt, orci libero mollis eros, id fringilla lorem tortor nec nunc. Integer ac mi erat. Nunc interdum urna ac purus sollicitudin malesuada. Curabitur aliquet, dui nec tempor venenatis, nisi augue mollis lorem, ac volutpat risus leo ac erat.
            </p>
            <p>
              Proin suscipit risus id leo volutpat, sit amet posuere lorem pharetra. Vivamus porttitor purus ut nisi fermentum, eget posuere tortor varius. Nam et eros at elit ullamcorper dapibus. Aenean vestibulum dolor eget justo iaculis, vel convallis leo auctor. Donec dignissim augue vel justo luctus, vel venenatis leo malesuada.
            </p>
            <p>
              Phasellus malesuada nulla ut mauris tincidunt, et fermentum purus ultricies. Ut auctor nec enim vitae sollicitudin. Integer ultricies, nulla a fermentum condimentum, dui nulla tristique ante, vel tincidunt elit elit ac risus.
            </p>
          </div>
         </AdminLayout>
  );
}
