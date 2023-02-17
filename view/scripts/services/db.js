export class DataBase {
  async getById(id) {
    const options = { method: "GET" };
    try {
      const response = await fetch(
        `http://localhost:3000/api/getArticle?id=${id}`,
        options
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }
  async editById(id, content) {
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content }),
    };
    try {
      const response = await fetch(
        `http://localhost:3000/api/updateArticle?id=${id}`,
        options
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  async editAll(article) {
    const options = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(article),
    };
    try {
      const response = await fetch(
        `http://localhost:3000/api/editAll`,
        options
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }
  async delete(id) {
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await fetch(
        `http://localhost:3000/api/deleteArticle?id=${id}`,
        options
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  async create(article) {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(article),
    };

    try {
      const response = await fetch(
        `http://localhost:3000/api/createArticle`,
        options
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }
}
