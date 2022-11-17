export const SeasonFilter = ({theSeasonsFromDecStation, setSeasonChoicesFromDecStation}) => {

  return (
    <div id="filter-bar">
      <select
        onChange={(event) => {
          setSeasonChoicesFromDecStation(parseInt(event.target.value));
        }}
      >
        <option value={0}>Choose a Season</option>
        {theSeasonsFromDecStation.map((seasonObj) => {
          return (
            <option key={seasonObj.id} value={seasonObj.id}>
              {seasonObj.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};
