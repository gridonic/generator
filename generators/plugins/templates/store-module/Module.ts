<%
var lowerCaseName = moduleName.toLowerCase();
var moduleClassName = moduleName + 'Module';
var stateName = moduleName + 'State';
-%>
import {
  Actions, Getters, Module, Mutations,
} from '@/store/store';

export const namespace = '<%= lowerCaseName %>';

const mutations = {
};

export const getters = {
};

export const actions = {
};

export interface <%= stateName %> {
}

export default class <%= moduleClassName %> implements Module<<%= stateName %>> {
  public get namespaced() {
    return true;
  }

  public get state(): <%= stateName %> {
    return {
    };
  }

  public get getters(): Getters<<%= stateName %>> {
    return {};
  }

  public get mutations(): Mutations<<%= stateName %>> {
    return {};
  }

  public get actions(): Actions<<%= stateName %>> {
    return {};
  }
}
