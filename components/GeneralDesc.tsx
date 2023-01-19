import { h } from 'preact';

const MyComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-5 md:px-10 lg:px-40 lg:flex-row">
      <div className="md:hidden">
        <h1 className="text-center font-medium text-xl my-4">Welcome to our wooden houses</h1>
      </div>
      <p className="text-left text-lg md:text-xl lg:text-2xl font-medium leading-tight my-4 md:my-8 lg:mr-8 lg:w-3/5">
        Jeśli szukasz spokojnego miejsca wakacyjnego blisko morza Bałtyckiego, to ośrodek drewnianych domków jest idealnym wyborem. Nasz ośrodek z dala od zgiełku, ale zarazem zaledwie kilka minut spacerem od piaszczystej plaży. Dla dzieci przygotowaliśmy specjalnie zagospodarowany plac zabaw, dla rodziców natomiast wypożyczalnię rowerów, dzięki czemu mogą podziwiać piękno okolic na dwóch kółkach. Nasze domki są wyposażone w wygodne łazienki i aneksy kuchenne, dzięki czemu będzie można swobodnie przygotowywać posiłki. W ośrodku panuje przyjazna atmosfera i wszystko jest skoncentrowane na odpoczynku i relaksie. Zachęcamy do zarezerwowania noclegów w naszych domkach i przyjechania do nas na wypoczynek.
      </p>
      <img src="/domki.jpg" className="w-full md:w-1/2 lg:w-2/5" alt="Our wooden houses" />
    </div>
  );
};

export default MyComponent;
