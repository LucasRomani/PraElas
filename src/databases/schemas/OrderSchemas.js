export const OrderSchema = {
    name: 'User',
    properties: {
        _id: 'string',
        name: 'string',
        email: 'string',
        password: 'string'
    }
};

const addUser = (user) => {
    Realm.open({ schema: [OrderSchema] }).then((realm) => {
      realm.write(() => {
        realm.create('User', user);
      });
    });
  };
  