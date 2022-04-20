import EventModel from '../model/event.model';


export const getEvents = async (query) => {
  try {
    const { search, isVirtual, category } = query;

    const joinQuery = [];
    if (typeof isVirtual !== 'undefined' && isVirtual.toLowerCase() !== 'all') {
      joinQuery.push({ isVirtual });
    }
    if (category && category.toLowerCase() !== 'all') {
      joinQuery.push({ category });
    }
    if (search) {
      joinQuery.push({
        $or: [
          { title: { $regex: '.*' + search.trim() + '.*', $options: 'i' } },
          { address: { $regex: '.*' + search.trim() + '.*', $options: 'i' } },
        ],
      });
    }

    let parameter = {};

    if (joinQuery.length) {
      parameter = {
        $and: joinQuery,
      };
    }
    const events = await EventModel.find(parameter);
    return events;
  } catch (error) {
    throw new Error(error);
  }
}
