import { MongoClient, MongoServerError } from "mongodb";

class DatabaseServer {
  private static _instance: DatabaseServer;
  static _conn: MongoClient;
  static ongoingTransactions = 0;
  private constructor() {
    const uri = "";
    const opts: any = {
      useNewUrlParser: true,
      useUnifiedTopology: true
    };
    const client = new MongoClient(uri, opts);

    DatabaseServer._conn = client;
  }

  /**
   *Creates a new instance of the Database connection, if there is a active instance then it returns the current one
   */
  static getInstance(): any {
    if (this._instance) {
      return this._instance;
    }
    this._instance = new DatabaseServer();
    return this._instance;
  }
  /**
   *Execute a .find query
   */
  static async getDocuments(collection_name: string, query: any = {}, select: any = { __v: 0 }, limit: number = 0) {
    this.ongoingTransactions++
    try {
      await this._conn.connect();
      const db = this._conn.db("microempresa");
      const collection = db.collection(collection_name);
      return await collection.find(query).project(select).limit(limit).toArray();
    } catch (e: any) {
      if (e instanceof MongoServerError) {
        console.error(e);
      }
    } finally {
      this.ongoingTransactions--
      if(this.ongoingTransactions < 1){
        await this._conn.close();
      }
    }
  }
  static async getStreamedDocuments(collection_name: string, query: any = {}, select: any = { __v: 0 }, limit: number = 0) {
    try {
      await this._conn.connect();
      const db = this._conn.db("microempresa");
      const collection = db.collection(collection_name);
      return collection.find(query).project(select).limit(limit).stream();
    } catch (e: any) {
      if (e instanceof MongoServerError) {
        console.error(e);
      }
    }
  }
}

export default DatabaseServer;
