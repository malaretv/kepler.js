import { Vector} from '@kaosat-dev/sylvester/src/index';

const Constants = {};

Constants.EARTH_RADIUS = 6371.0;
Constants.MU = 398600.0;

Constants.I = Vector.create([1, 0, 0]);
Constants.J = Vector.create([0, 1, 0]);
Constants.K = Vector.create([0, 0, 1]);

export default Constants;