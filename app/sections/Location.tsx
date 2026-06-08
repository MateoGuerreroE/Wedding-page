import Image from "next/image";

export default function Location() {
  return (
    <div id="location" className="w-full bg-[#F9F9F9] flex justify-center">
      <div className="max-w-350 p-12 py-20 md:p-20 relative w-full">
        <Image
          src="/titles/location.svg"
          alt="Location"
          width={266}
          height={50}
        />
        <div className="flex md:flex-row flex-col mt-10 gap-18 md:gap-0 text-black">
          <div className="flex flex-col md:w-1/2 font-primary md:text-lg gap-12">
            <p>
              Queremos que llegues tranquila/o y disfrutes el recorrido.
              Recomendamos usar Waze, aunque también podrás usar Google Maps
            </p>
            <div className="flex flex-col md:pr-6 gap-8">
              <div className="grid grid-cols-[5rem_1fr] gap-6 items-center">
                <Image
                  src="/material/flower_paper.png"
                  alt="Flower"
                  width={83}
                  height={83}
                  className="md:size-auto size-18"
                />
                <p>
                  La dirección aparecerá con el nombre del lugar:{" "}
                  <b>restaurante graná Cra. 6 #3 - 33</b>
                </p>
              </div>
              <div className="grid grid-cols-[5rem_1fr] gap-6 items-center">
                <Image
                  src="/material/star_paper.png"
                  alt="Star"
                  width={83}
                  height={83}
                  className="md:size-auto size-18"
                />
                <p>El restaurante cuenta con parqueadero</p>
              </div>
              <div className="grid grid-cols-[5rem_1fr] gap-6 items-center">
                <Image
                  src="/material/happy_paper.png"
                  alt="Happy"
                  width={83}
                  height={83}
                  className="md:size-auto size-18"
                />
                <p>
                  Recomendamos salir con tiempo, especialmente si vienes desde
                  Bogotá
                </p>
              </div>
              <div className="grid grid-cols-[5rem_1fr] gap-6 items-center">
                <Image
                  src="/material/exclamation_paper.png"
                  alt="Exclamation"
                  width={83}
                  height={83}
                  className="md:size-auto size-18 h-24"
                />
                <p>
                  Recomendamos salir con tiempo, especialmente si vienes desde
                  Bogotá
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.4925473398544!2d-74.00795552381217!3d5.023557538771643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e40710021b0d083%3A0x5da202ab1399718e!2zR3JhbsOh!5e0!3m2!1sen!2sco!4v1780868615558!5m2!1sen!2sco"
              width="600"
              height="600"
              style={{ border: 0 }}
              allowFullScreen={false}
              className="w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
