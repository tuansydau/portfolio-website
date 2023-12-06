const buttonClass =
  'border-black border rounded-full py-2 px-8 bg-white hover:bg-black hover:text-white border-b-2';
export default function Footer() {
  return (
    <div className="flex w-3/4 justify-between items-end space-x-12 mt-16 mb-8">
      <div>Designed and coded by Tuan Dau • 2023</div>
      <div className="flex justify-center items-center space-x-4 md:space-x-12">
        <div className={buttonClass}>LinkedIn</div>
        <a className={buttonClass} href="mailto:tuansdau@gmail.com">
          Email
        </a>
      </div>
    </div>
  );
}
