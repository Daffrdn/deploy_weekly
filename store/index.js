import gql from "graphql-tag";

export const state = () => ({
    weekly2: []
});

export const actions = {
    async callApollo ({ commit }) {
        const response = await this.app.apolloProvider.defaultClient.query({
            query: gql`
            query MyQuery {
                weekly2 (order_by: {id: asc}) {
                    id
                    title
                    icon
                    deskription
                    content
                }
            }`
        });
        await commit("updateWeekly2", response.data.weekly2);
    }
};

export const mutations = {
    updateWeekly2 (state, data){
        state.weekly2 = data;
    }
}