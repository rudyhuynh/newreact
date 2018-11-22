import '../../../test-helper/mockHighcharts';
import { requestMapGeo } from './requestMapGeo';
import Highcharts from 'highcharts';
import { fetchHelper } from '../../../helpers';
import { Snackbar } from '../../../components';

describe('requestMapGo()', () => {
  test('IF already has map, do nothing', async () => {
    Highcharts.maps = { mapPath: {} };

    await requestMapGeo('mapPath');
  });

  test('IF has NO map && request success, then save cache the map', async () => {
    const mapData = {};
    const mapPath = 'mapPath';
    Highcharts.maps = {};

    jest
      .spyOn(fetchHelper, 'fetch')
      .mockImplementation(() => Promise.resolve([mapData, 200]));

    await requestMapGeo(mapPath);
    expect(Highcharts.maps[mapPath]).toBe(mapData);

    expect(Highcharts.maps[mapPath]).toBe(mapData);

    fetchHelper.fetch.mockRestore();
  });

  test('IF has NO map && request fail', async () => {
    const mapPath = 'mapPath';

    Highcharts.maps = {};
    jest
      .spyOn(fetchHelper, 'fetch')
      .mockImplementation(() => Promise.resolve([null, 500]));
    jest.spyOn(Snackbar, 'show').mockImplementation(() => {});

    await requestMapGeo(mapPath);

    expect(Snackbar.show).toBeCalled();

    fetchHelper.fetch.mockRestore();
    Snackbar.show.mockRestore();
  });
});
