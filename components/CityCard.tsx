import Day from "./Day";
import Night from "./Night";

const CityCard = ({ cityData }: any) => {
  const { current, location } = cityData;


  return (
    <div className="card col-md-5 mx-auto mt-5">
      <h1 className="text-center text-capitalize">you searched for {location.name}</h1>
      <div className="card-body">
        <h5 className="card-title">
          {location.name} - {location.country}
        </h5>
        <p className="card-text text-secondary">
          Total Condition <span className="text-primary">{current.condition.text}</span>
        </p>
        <p className="card-text text-secondary">
          Temp <span className="text-primary">{current.temp_c} ْC</span>
        </p>
        <p className="card-text text-secondary">
          Feels Like <span className="text-primary">{current.feelslike_c} ْC</span>
        </p>
        <p className="card-text text-secondary">
          Wind Speed <span className="text-primary">{current.wind_kph} km/h</span>
        </p>
        <p className="card-text text-secondary">
          Day/night <span className="text-primary">{current.is_day ? <Day /> : <Night />}</span>
        </p>
        <p className="card-text text-secondary">
          Local Time <span className="text-primary">{location.localtime.split(" ")[1]}</span>
        </p>
      </div>
    </div>
  );
};

export default CityCard;
