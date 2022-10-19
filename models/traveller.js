const Traveller = function(journeys) {
  this.journeys = journeys;
};


Traveller.prototype.getJourneyStartLocations = function() {
  const startLocation = this.journeys.map((journey) => journey.startLocation)
  return startLocation;
};


Traveller.prototype.getJourneyEndLocations = function () {
  const endLocation = this.journeys.map((journey) => journey.endLocation)
  return endLocation;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const byTransport = this.journeys.filter((journey) => journey.transport === transport);
  return byTransport;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter((journey) => journey.distance >= minDistance);
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const totalDistance = this.journeys.reduce ((distanceTotal, journey) => {
    return distanceTotal + journey.distance;
  }, 0)
  return totalDistance;
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  const uniqueList = this.journeys.map(journey => journey.transport)
  .filter((value, index, self) => self.indexOf(value) === index)
  return uniqueList;
};


module.exports = Traveller;
