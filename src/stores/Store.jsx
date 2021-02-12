import { action, computed, observable } from 'mobx';

import _ from 'lodash';
import request from 'superagent';

export default class Store {
    @observable _core = null;

    @observable selected = null;

    @observable volume = 1.0;
    @observable playing = false;

    constructor() {
        return new CyberRadioCore().then((core) => {
            this._core = core;
            this._core.start_core();
            return this;
        });
    }

    @action openDevice = () => {
        this.selected = {
            channels: 1,
            codec: "WAV",
            audio_fs: 48e3,
            frequency: 96.9e6,
            device: "Airspy HF+ Discovery",
            backend: "WebUSB"
        };
        this._core.open_device();
        this._tune();
        this._core.start_stream();
        this.playing = true;
    }

    @action setVolume = (volume) => {
        this._core.update_demod(volume);
        this.volume = volume;
    }

    @action forward = () => {
        this.selected.frequency += 100e3;
        this._tune();
    }

    @action backward = () => {
        this.selected.frequency -= 100e3;
        this._tune();
    }

    @action toggle = () => {
        if (this.playing) {
            this._core.stop_stream();
            this.playing = !this.playing;
            return;
        }
        this._tune();
        this._core.start_stream();
        this.playing = !this.playing;
    }

    @action _tune() {
        this._core.update_device(this.selected.frequency);
    }
}
